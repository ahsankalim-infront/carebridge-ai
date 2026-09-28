export function isMysqlEnabled() {
  const host = process.env.MYSQL_HOST?.trim();
  if (!host) return false;
  if (process.env.VERCEL && (host === "127.0.0.1" || host === "localhost")) {
    return false;
  }
  return true;
}
