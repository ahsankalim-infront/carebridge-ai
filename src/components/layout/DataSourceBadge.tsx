import { isMysqlEnabled } from "@/lib/mysql-enabled";

export function DataSourceBadge() {
  const source = isMysqlEnabled() ? "mysql" : "json";

  return (
    <span className="rounded-full border border-black/10 px-2.5 py-1 text-xs tracking-wide text-mist uppercase">
      Data: {source}
    </span>
  );
}
