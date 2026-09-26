import mysql, { type Pool, type RowDataPacket } from "mysql2/promise";
import { readJsonFile } from "./json-store";
import type { Service, Specialty, Testimonial } from "./types";

const RETRY_MS = 15_000;

let pool: Pool | null = null;
let available: boolean | null = null;
let lastFailure = 0;
let seeded = false;

function mysqlConfig() {
  return {
    host: process.env.MYSQL_HOST || "127.0.0.1",
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "carecommerce",
  };
}

async function ensureDatabase() {
  const { host, port, user, password, database } = mysqlConfig();
  const conn = await mysql.createConnection({
    host,
    port,
    user,
    password,
    connectTimeout: 1200,
  });
  await conn.query(
    `CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`,
  );
  await conn.end();
}

async function ensureSchema(activePool: Pool) {
  await activePool.query(`
    CREATE TABLE IF NOT EXISTS services (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(120) NOT NULL UNIQUE,
      title VARCHAR(200) NOT NULL,
      excerpt TEXT NOT NULL,
      description TEXT NOT NULL,
      icon VARCHAR(60) NOT NULL,
      features JSON NOT NULL,
      outcomes JSON NOT NULL,
      sort_order INT DEFAULT 0,
      active TINYINT DEFAULT 1
    )
  `);

  await activePool.query(`
    CREATE TABLE IF NOT EXISTS specialties (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(160) NOT NULL,
      category VARCHAR(80) NOT NULL,
      sort_order INT DEFAULT 0
    )
  `);

  await activePool.query(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INT AUTO_INCREMENT PRIMARY KEY,
      quote TEXT NOT NULL,
      name VARCHAR(160) NOT NULL,
      role VARCHAR(160) NOT NULL,
      location VARCHAR(160) NOT NULL
    )
  `);

  await activePool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(180) NOT NULL,
      email VARCHAR(180) NOT NULL,
      phone VARCHAR(40) NOT NULL,
      organization VARCHAR(180) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await activePool.query(`
    CREATE TABLE IF NOT EXISTS appointments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(180) NOT NULL,
      email VARCHAR(180) NOT NULL,
      phone VARCHAR(40) NOT NULL,
      preferred_date DATE NOT NULL,
      preferred_time VARCHAR(40) NOT NULL,
      reason TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

async function seedIfEmpty(activePool: Pool) {
  if (seeded) return;

  const [serviceCount] = await activePool.query<RowDataPacket[]>(
    "SELECT COUNT(*) AS count FROM services",
  );
  if (Number(serviceCount[0]?.count ?? 0) === 0) {
    const services = await readJsonFile<Service[]>("services.json");
    for (const service of services) {
      await activePool.query(
        `INSERT INTO services
          (id, slug, title, excerpt, description, icon, features, outcomes, sort_order)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          service.id,
          service.slug,
          service.title,
          service.excerpt,
          service.description,
          service.icon,
          JSON.stringify(service.features),
          JSON.stringify(service.outcomes),
          service.sortOrder,
        ],
      );
    }
  }

  const [specialtyCount] = await activePool.query<RowDataPacket[]>(
    "SELECT COUNT(*) AS count FROM specialties",
  );
  if (Number(specialtyCount[0]?.count ?? 0) === 0) {
    const specialties = await readJsonFile<Specialty[]>("specialties.json");
    for (const specialty of specialties) {
      await activePool.query(
        `INSERT INTO specialties (id, name, category, sort_order) VALUES (?, ?, ?, ?)`,
        [specialty.id, specialty.name, specialty.category, specialty.sortOrder],
      );
    }
  }

  const [testimonialCount] = await activePool.query<RowDataPacket[]>(
    "SELECT COUNT(*) AS count FROM testimonials",
  );
  if (Number(testimonialCount[0]?.count ?? 0) === 0) {
    const testimonials = await readJsonFile<Testimonial[]>("testimonials.json");
    for (const item of testimonials) {
      await activePool.query(
        `INSERT INTO testimonials (id, quote, name, role, location) VALUES (?, ?, ?, ?, ?)`,
        [item.id, item.quote, item.name, item.role, item.location],
      );
    }
  }

  seeded = true;
}

export async function getMysqlPool(): Promise<Pool | null> {
  if (available === false && Date.now() - lastFailure < RETRY_MS) {
    return null;
  }

  try {
    if (!pool) {
      await ensureDatabase();
      const config = mysqlConfig();
      pool = mysql.createPool({
        ...config,
        waitForConnections: true,
        connectionLimit: 8,
        connectTimeout: 1200,
      });
    }

    const connection = await pool.getConnection();
    connection.release();
    await ensureSchema(pool);
    await seedIfEmpty(pool);
    available = true;
    return pool;
  } catch {
    available = false;
    lastFailure = Date.now();
    pool = null;
    seeded = false;
    return null;
  }
}

export function parseJsonColumn<T>(value: T | string): T {
  if (typeof value === "string") {
    return JSON.parse(value) as T;
  }
  return value;
}
