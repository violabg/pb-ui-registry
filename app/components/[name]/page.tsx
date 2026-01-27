import Link from "next/link";
import { notFound } from "next/navigation";

import { CodeBlock } from "@/components/code-block";
import { InstallCommand } from "@/components/install-command";
import { TagInputPreview } from "@/components/tag-input-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getInstallCommand,
  getRegistryItem,
  getRegistryItems,
} from "@/lib/registry";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const items = await getRegistryItems();

  return items.map((item) => ({ name: item.name }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const item = await getRegistryItem(name, true);

  if (!item) {
    notFound();
  }

  const source = item.files?.[0]?.content ?? "";

  return (
    <div className="mx-auto px-4 sm:px-6 py-10 w-full max-w-4xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Link href="/components" className="text-muted-foreground text-xs">
            ← Back to components
          </Link>
          <h1 className="font-semibold text-3xl">{item.title}</h1>
          <p className="text-muted-foreground text-sm">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{item.type}</Badge>
            {item.categories?.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <InstallCommand command={getInstallCommand(item.name)} />

        {name === "tag-input" ? (
          <section className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">Preview</h2>
              <Button asChild variant="outline" size="sm">
                <Link href="/registry/tag-input">Registry JSON</Link>
              </Button>
            </div>
            <div className="bg-card shadow-sm p-4 border border-border rounded-lg">
              <TagInputPreview />
            </div>
          </section>
        ) : null}

        <section className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Source</h2>
            <Button asChild variant="outline" size="sm">
              <Link href={`/registry/${item.name}`}>Registry JSON</Link>
            </Button>
          </div>
          <CodeBlock code={source} language="tsx" />
        </section>
      </div>
    </div>
  );
}
