import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getRegistryItems } from "@/lib/registry";

export const dynamic = "force-static";

export default async function Home() {
  const items = await getRegistryItems();
  const featured = items.slice(0, 6);

  return (
    <div className="flex flex-col gap-12 mx-auto px-4 sm:px-6 py-14 w-full max-w-6xl">
      <section className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Custom registry</Badge>
          <Badge variant="outline">Next.js 16</Badge>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-4xl sm:text-5xl">
            shadcd/ui registry
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Browse our shadcn-compatible components, copy installation commands,
            and ship UI faster.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/components">Browse components</Link>}
          ></Button>
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="/registry.json">Registry JSON</Link>}
          ></Button>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Featured components</h2>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<Link href="/components">View all</Link>}
          ></Button>
        </div>
        <div className="gap-4 grid md:grid-cols-2">
          {featured.map((item) => (
            <Link
              key={item.name}
              href={item.docs ?? `/components/${item.name}`}
              className="flex flex-col gap-2 bg-card p-4 border border-border hover:border-primary/50 rounded-lg text-card-foreground transition"
            >
              <div className="font-semibold text-base">{item.title}</div>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
