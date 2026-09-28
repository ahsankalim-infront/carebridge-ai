import { promises as fs } from "fs";
import path from "path";
import { getBundledJson } from "./seeds";

const bundledDir = path.join(process.cwd(), "data");
const writableDir =
  process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME
    ? path.join("/tmp", "carebridge-data")
    : bundledDir;

async function readText(filePath: string) {
  return fs.readFile(filePath, "utf8").catch(() => "");
}

export async function readJsonFile<T>(filename: string): Promise<T> {
  const candidates = [path.join(writableDir, filename), path.join(bundledDir, filename)];

  for (const filePath of candidates) {
    const raw = await readText(filePath);
    if (!raw.trim()) continue;
    try {
      return JSON.parse(raw) as T;
    } catch {
      continue;
    }
  }

  const bundled = getBundledJson<T>(filename);
  if (bundled !== null) return bundled;
  return [] as T;
}

export async function writeJsonFile<T>(filename: string, value: T) {
  await fs.mkdir(writableDir, { recursive: true });
  await fs.writeFile(
    path.join(writableDir, filename),
    JSON.stringify(value, null, 2),
    "utf8",
  );
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
