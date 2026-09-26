import { appendJsonRecord, readJsonFile } from "./json-store";
import { getMysqlPool, parseJsonColumn } from "./mysql";
import type {
  Appointment,
  ContactMessage,
  Service,
  Specialty,
  StoreResult,
  Testimonial,
} from "./types";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

function mapService(row: RowDataPacket): Service {
  return {
    id: Number(row.id),
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt),
    description: String(row.description),
    icon: String(row.icon),
    features: parseJsonColumn<string[]>(row.features),
    outcomes: parseJsonColumn<string[]>(row.outcomes),
    sortOrder: Number(row.sort_order ?? row.sortOrder ?? 0),
  };
}

export async function getServices(): Promise<StoreResult<Service[]>> {
  const pool = await getMysqlPool();
  if (pool) {
    try {
      const [rows] = await pool.query<RowDataPacket[]>(
        "SELECT * FROM services WHERE active = 1 ORDER BY sort_order ASC",
      );
      return { data: rows.map(mapService), source: "mysql" };
    } catch {
      // Fall through to JSON.
    }
  }

  const data = await readJsonFile<Service[]>("services.json");
  return {
    data: [...data].sort((a, b) => a.sortOrder - b.sortOrder),
    source: "json",
  };
}

export async function getServiceBySlug(
  slug: string,
): Promise<StoreResult<Service | null>> {
  const { data, source } = await getServices();
  return {
    data: data.find((service) => service.slug === slug) ?? null,
    source,
  };
}

export async function getSpecialties(): Promise<StoreResult<Specialty[]>> {
  const pool = await getMysqlPool();
  if (pool) {
    try {
      const [rows] = await pool.query<RowDataPacket[]>(
        "SELECT id, name, category, sort_order AS sortOrder FROM specialties ORDER BY sort_order ASC",
      );
      return {
        data: rows.map((row) => ({
          id: Number(row.id),
          name: String(row.name),
          category: String(row.category),
          sortOrder: Number(row.sortOrder),
        })),
        source: "mysql",
      };
    } catch {
      // Fall through to JSON.
    }
  }

  const data = await readJsonFile<Specialty[]>("specialties.json");
  return {
    data: [...data].sort((a, b) => a.sortOrder - b.sortOrder),
    source: "json",
  };
}

export async function getTestimonials(): Promise<StoreResult<Testimonial[]>> {
  const pool = await getMysqlPool();
  if (pool) {
    try {
      const [rows] = await pool.query<RowDataPacket[]>(
        "SELECT id, quote, name, role, location FROM testimonials ORDER BY id ASC",
      );
      return {
        data: rows.map((row) => ({
          id: Number(row.id),
          quote: String(row.quote),
          name: String(row.name),
          role: String(row.role),
          location: String(row.location),
        })),
        source: "mysql",
      };
    } catch {
      // Fall through to JSON.
    }
  }

  return {
    data: await readJsonFile<Testimonial[]>("testimonials.json"),
    source: "json",
  };
}

export async function saveContactMessage(
  payload: ContactMessage,
): Promise<StoreResult<ContactMessage>> {
  const pool = await getMysqlPool();
  if (pool) {
    try {
      const [result] = await pool.query<ResultSetHeader>(
        `INSERT INTO messages (full_name, email, phone, organization, message)
         VALUES (?, ?, ?, ?, ?)`,
        [
          payload.fullName,
          payload.email,
          payload.phone,
          payload.organization,
          payload.message,
        ],
      );
      return {
        data: {
          ...payload,
          id: result.insertId,
          createdAt: new Date().toISOString(),
        },
        source: "mysql",
      };
    } catch {
      // Fall through to JSON.
    }
  }

  const saved = await appendJsonRecord("messages.json", payload);
  return { data: saved, source: "json" };
}

export async function saveAppointment(
  payload: Appointment,
): Promise<StoreResult<Appointment>> {
  const pool = await getMysqlPool();
  if (pool) {
    try {
      const [result] = await pool.query<ResultSetHeader>(
        `INSERT INTO appointments
          (name, email, phone, preferred_date, preferred_time, reason)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          payload.name,
          payload.email,
          payload.phone,
          payload.preferredDate,
          payload.preferredTime,
          payload.reason,
        ],
      );
      return {
        data: {
          ...payload,
          id: result.insertId,
          createdAt: new Date().toISOString(),
        },
        source: "mysql",
      };
    } catch {
      // Fall through to JSON.
    }
  }

  const saved = await appendJsonRecord("appointments.json", payload);
  return { data: saved, source: "json" };
}

export async function getHealth() {
  const pool = await getMysqlPool();
  return {
    mysql: Boolean(pool),
    fallback: "json",
    source: pool ? "mysql" : "json",
  };
}
