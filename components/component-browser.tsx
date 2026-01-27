"use client";

import Link from "next/link";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import type { RegistryItemSummary } from "@/lib/registry";
import { cn } from "@/lib/utils";

type ComponentBrowserProps = {
  items: RegistryItemSummary[];
};

export function ComponentBrowser({ items }: ComponentBrowserProps) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const input = query.trim().toLowerCase();

    if (!input) {
      return items;
    }

    return items.filter((item) => {
      const haystack = [
        item.name,
        item.title,
        item.description,
        item.categories?.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(input);
    });
  }, [items, query]);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-3xl">Components</h1>
        <p className="text-muted-foreground text-sm">
          Browse the registry and copy installation commands or component code.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search components..."
          className="max-w-md"
        />
        <span className="text-muted-foreground text-xs">
          {filtered.length} components
        </span>
      </div>
      <div className="gap-4 grid md:grid-cols-2">
        {filtered.map((item) => (
          <Link
            key={item.name}
            href={item.docs ?? `/components/${item.name}`}
            className={cn(
              "flex flex-col gap-3 bg-card shadow-sm hover:shadow-md p-4 border border-border hover:border-primary/50 rounded-lg text-card-foreground transition",
            )}
          >
            <div>
              <div className="font-semibold text-base">{item.title}</div>
              <div className="text-muted-foreground text-sm">{item.name}</div>
            </div>
            {item.description && (
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            )}
            {item.categories?.length ? (
              <div className="flex flex-wrap gap-2">
                {item.categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
