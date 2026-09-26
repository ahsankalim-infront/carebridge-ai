import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

export async function readJsonFile<T>(filename: string): Promise<T> {
  const filePath = path.join(dataDir, filename);
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export async function writeJsonFile<T>(filename: string, value: T) {
  const filePath = path.join(dataDir, filename);
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(value, null, 2), "utf8");
}

export async function appendJsonRecord<T extends { id?: number }>(
  filename: string,
  record: T,
): Promise<T & { id: number; createdAt: string }> {
  const items = await readJsonFile<T[]>(filename).catch(() => [] as T[]);
  const nextId =
    items.reduce((max, item) => Math.max(max, Number(item.id ?? 0)), 0) + 1;
  const saved = {
    ...record,
    id: nextId,
    createdAt: new Date().toISOString(),
  };
  items.push(saved);
  await writeJsonFile(filename, items);
  return saved;
}
