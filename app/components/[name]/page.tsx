import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { InstallCommand } from "@/components/install-command";
import { Badge } from "@/components/ui/badge";
import { examples } from "@/lib/examples";
import {
  getInstallCommand,
  getRegistryItem,
  getRegistryItems,
} from "@/lib/registry";
import { groupToSidebarSections } from "@/lib/registry-groups";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const items = await getRegistryItems();

  return items.map((item) => ({ name: item.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const item = await getRegistryItem(name);

  if (!item) {
    return {
      title: "Component not found",
      description: "The requested component could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${item.title} RHF input`;
  const description =
    item.description ||
    "React Hook Form input with Zod-ready validation, available from the pb-ui registry.";
  const url = item.docs || `/components/${item.name}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const item = await getRegistryItem(name);

  const allItems = await getRegistryItems();
  const sections = groupToSidebarSections(allItems);

  if (!item) {
    notFound();
  }

  const componentExamples = examples[name] || [];

  return (
    <div className="px-4 py-10 w-full">
      <div className="lg:gap-10 lg:grid lg:grid-cols-[1fr_240px] xl:grid-cols-[240px_1fr_240px]">
        <aside className="hidden xl:block">
          <div className="top-24 sticky pr-4 h-[calc(100vh-6rem)] overflow-y-auto">
            {sections.map((section) => (
              <div key={section.key} className="mb-6">
                <div className="mb-2 font-semibold">{section.key}</div>
                <ul className="space-y-1 m-0 p-0 list-none">
                  {section.items.map((it) => (
                    <li key={it.name}>
                      <Link
                        href={`/components/${it.name}`}
                        className={`block text-sm ${
                          it.name === item.name
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {it.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <div className="flex flex-col gap-10 min-w-0">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/components"
                className="text-muted-foreground text-sm hover:underline"
              >
                Components
              </Link>
              <h1 className="font-bold text-4xl leading-tight tracking-tight scroll-m-20">
                {item.title}
              </h1>
              <p className="text-muted-foreground text-lg">
                {item.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="px-2.5 py-0.5 rounded-md font-medium text-xs"
              >
                {item.type}
              </Badge>
              {item.categories?.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-2.5 py-0.5 rounded-md font-medium text-xs"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2
              id="installation"
              className="font-semibold text-xl tracking-tight scroll-m-20"
            >
              Installation
            </h2>
            <InstallCommand command={getInstallCommand(item.name)} />
          </div>

          {componentExamples.length > 0 && (
            <div className="flex flex-col gap-8">
              <h2 className="font-semibold text-2xl tracking-tight scroll-m-20">
                Examples
              </h2>
              {componentExamples.map((example) => (
                <div
                  key={example.name}
                  id={example.name}
                  className="flex flex-col gap-4 scroll-mt-24"
                >
                  <h3 className="font-semibold text-lg">{example.title}</h3>
                  <ComponentPreviewTabs
                    preview={example.component}
                    code={example.code}
                    language="tsx"
                    registryHref={`/registry/${item.name}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:block text-sm">
          <div className="top-10 sticky h-[calc(100vh-3.5rem)] overflow-hidden">
            <div className="py-2 h-full overflow-y-auto">
              <div className="space-y-4">
                <div className="font-semibold">On This Page</div>
                <ul className="space-y-2 m-0 pl-0 list-none">
                  <li>
                    <Link
                      href="#installation"
                      className="text-muted-foreground hover:text-foreground line-clamp-1"
                    >
                      Installation
                    </Link>
                  </li>
                  {componentExamples.length > 0 && (
                    <li>
                      <span className="font-medium">Examples</span>
                      <ul className="space-y-2 m-0 mt-2 pl-4 list-none">
                        {componentExamples.map((example) => (
                          <li key={example.name}>
                            <Link
                              href={`#${example.name}`}
                              className="text-muted-foreground hover:text-foreground line-clamp-1"
                            >
                              {example.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
