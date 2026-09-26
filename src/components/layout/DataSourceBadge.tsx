"use client";

import { useEffect, useState } from "react";

export function DataSourceBadge() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.json())
      .then((payload) => setSource(payload.source))
      .catch(() => setSource("json"));
  }, []);

  if (!source) return null;

  return (
    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] tracking-wide text-mist/80 uppercase">
      Data: {source}
    </span>
  );
}
