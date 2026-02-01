"use client";

import Link from "next/link";
import * as React from "react";
import { ViewTransition } from "react";

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

  const { rhfItems, baseItems } = React.useMemo(() => {
    const rhf: RegistryItemSummary[] = [];
    const base: RegistryItemSummary[] = [];

    for (const item of filtered) {
      if (item.name.startsWith("rhf-")) {
        rhf.push(item);
      } else {
        base.push(item);
      }
    }

    // Sort RHF items to put "rhf-inputs" first, then by title
    rhf.sort((a, b) => {
      if (a.name === "rhf-inputs") return -1;
      if (b.name === "rhf-inputs") return 1;
      return a.title.localeCompare(b.title);
    });

    return { rhfItems: rhf, baseItems: base };
  }, [filtered]);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl">Components</h1>
          <p className="text-muted-foreground text-sm">
            Browse the registry and copy installation commands or component
            code.
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
      </div>

      {rhfItems.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="pb-2 border-border border-b font-bold text-2xl tracking-tight">
            React Hook Form
          </h2>
          <div className="gap-4 grid md:grid-cols-2">
            {rhfItems.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}

      {baseItems.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="pb-2 border-border border-b font-bold text-2xl tracking-tight">
            Base Components
          </h2>
          <div className="gap-4 grid md:grid-cols-2">
            {baseItems.map((item) => (
              <ComponentCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function ComponentCard({ item }: { item: RegistryItemSummary }) {
  return (
    <Link
      href={item.docs ?? `/components/${item.name}`}
      className={cn(
        "flex flex-col gap-3 bg-card shadow-sm hover:shadow-md p-4 border border-border hover:border-primary/50 rounded-lg text-card-foreground transition",
      )}
    >
      <div>
        <ViewTransition name={`title-${item.name}`}>
          <div className="font-semibold text-base">{item.title}</div>
        </ViewTransition>
        <div className="text-muted-foreground text-sm">{item.name}</div>
      </div>
      {item.description && (
        <ViewTransition name={`description-${item.name}`}>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {item.description}
          </p>
        </ViewTransition>
      )}
      {item.categories?.length ? (
        <ViewTransition name={`categories-${item.name}`}>
          <div className="flex flex-wrap gap-2 mt-auto">
            {item.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </ViewTransition>
      ) : null}
    </Link>
  );
}
