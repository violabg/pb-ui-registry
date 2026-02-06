"use client";

import { XIcon } from "lucide-react";
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
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const tags = React.useMemo(() => {
    const tagSet = new Set<string>();

    for (const item of items) {
      item.categories?.forEach((category) => tagSet.add(category));
    }

    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = React.useMemo(() => {
    const input = query.trim().toLowerCase();

    return items.filter((item) => {
      if (selectedTags.length > 0) {
        const matchesTag = item.categories?.some((category) =>
          selectedTags.includes(category),
        );

        if (!matchesTag) {
          return false;
        }
      }

      if (!input) {
        return true;
      }

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
  }, [items, query, selectedTags]);

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
          <h2 className="font-display text-3xl tracking-tight">
            Browse the library
          </h2>
          <p className="text-muted-foreground text-sm">
            Search, filter, and jump directly into the component you need.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-3 py-2 border border-border/70 rounded-2xl surface-ring surface-panel-soft">
            <div className="relative flex-1">
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search components..."
                className="bg-transparent shadow-none pr-8 border-0 focus-visible:ring-0"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="top-1/2 right-2 absolute text-muted-foreground hover:text-foreground transition -translate-y-1/2"
                  aria-label="Clear search"
                >
                  <XIcon className="size-4" />
                </button>
              ) : null}
            </div>
            <span className="text-muted-foreground text-xs">
              {filtered.length} components
            </span>
          </div>
          {tags.length > 0 ? (
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => {
                const isActive = selectedTags.includes(tag);

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() =>
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((value) => value !== tag)
                          : [...prev, tag],
                      )
                    }
                    className={cn(
                      "inline-flex items-center px-3 py-1.5 border rounded-full font-medium text-xs transition",
                      isActive
                        ? "border-foreground/30 bg-foreground/10 text-foreground"
                        : "border-border/70 text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                    )}
                    aria-pressed={isActive}
                  >
                    {tag}
                  </button>
                );
              })}
              {selectedTags.length > 0 ? (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTags([])}
                    className="text-muted-foreground hover:text-foreground text-xs transition"
                  >
                    Clear filters
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedTags([])}
                    className="inline-flex justify-center items-center border border-border/70 hover:border-foreground/30 rounded-full size-6 text-muted-foreground hover:text-foreground transition"
                    aria-label="Reset tag filters"
                  >
                    <XIcon className="size-3" />
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {rhfItems.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="pb-2 border-border border-b font-display text-2xl tracking-tight">
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
          <h2 className="pb-2 border-border border-b font-display text-2xl tracking-tight">
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
        "flex flex-col gap-3 p-4 border rounded-2xl text-card-foreground surface-panel-soft card-glow",
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
