import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

import { CatalogSidebar } from "@/components/catalog-sidebar";
import { ComponentPreviewTabs } from "@/components/component-preview-tabs";
import { FadeIn } from "@/components/fade-in";
import { InstallCommand } from "@/components/install-command";
import { Badge } from "@/components/ui/badge";
import { examples } from "@/lib/examples";
import {
  getInstallCommand,
  getRegistryItem,
  getRegistryItems,
} from "@/lib/registry";
import { groupToSidebarSections } from "@/lib/registry-groups";
import { ChevronRight, Download, FileCode2 } from "lucide-react";

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
    <div className="px-4 xl:px-10 py-12 w-full min-h-screen">
      <div className="mx-auto max-w-8xl">
        <div className="gap-10 grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_200px]">
          {/* Left Sidebar */}
          <CatalogSidebar sections={sections} currentItemName={item.name} />

          {/* Main Content */}
          <div className="flex flex-col gap-10 min-w-0">
            {/* Breadcrumb */}
            <FadeIn className="flex items-center gap-2 text-sm">
              <Link
                href="/components"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Components
              </Link>
              <ChevronRight className="size-3.5 text-primary/50" />
              <span className="font-medium text-foreground">{item.title}</span>
            </FadeIn>

            {/* Header */}
            <FadeIn className="flex flex-col gap-4">
              <ViewTransition name={`title-${item.name}`}>
                <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
                  {item.title}
                </h1>
              </ViewTransition>
              <ViewTransition name={`description-${item.name}`}>
                <p className="max-w-2xl text-muted-foreground text-lg">
                  {item.description}
                </p>
              </ViewTransition>
              <ViewTransition name={`categories-${item.name}`}>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 px-3 py-1 border border-primary/20 rounded-md font-medium text-primary text-xs"
                  >
                    {item.type}
                  </Badge>
                  {item.categories?.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="px-3 py-1 rounded-md font-medium text-xs"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </ViewTransition>
            </FadeIn>

            {/* Installation */}
            <FadeIn delay={0.1}>
              <div className="p-6 border border-border/50 rounded-xl surface-panel">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="size-4 text-primary" />
                  <h2
                    id="installation"
                    className="font-display font-semibold text-xl tracking-tight scroll-m-20"
                  >
                    Installation
                  </h2>
                </div>
                <InstallCommand command={getInstallCommand(item.name)} />
              </div>
            </FadeIn>

            {/* Examples */}
            {componentExamples.length > 0 && (
              <FadeIn delay={0.15} className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <FileCode2 className="size-5 text-primary" />
                  <h2 className="font-display font-semibold text-2xl tracking-tight scroll-m-20">
                    Examples
                  </h2>
                </div>
                {componentExamples.map((example, index) => (
                  <FadeIn
                    key={example.name}
                    delay={0.1 * (index + 1)}
                    className="flex flex-col gap-4 scroll-mt-24"
                  >
                    <h3
                      id={example.name}
                      className="font-display font-semibold text-lg"
                    >
                      {example.title}
                    </h3>
                    <ComponentPreviewTabs
                      preview={example.component}
                      code={example.code}
                      language="tsx"
                      registryHref={`/registry/${item.name}`}
                    />
                  </FadeIn>
                ))}
              </FadeIn>
            )}
          </div>

          {/* Right Sidebar - Table of Contents */}
          <aside className="hidden xl:block text-sm">
            <div className="top-20 sticky h-[calc(100vh-6rem)] overflow-y-auto">
              <div className="p-5 border border-border/50 rounded-xl surface-panel-soft">
                <div className="mb-4 font-display font-semibold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                  On this page
                </div>
                <ul className="space-y-2 m-0 pl-0 list-none">
                  <li>
                    <Link
                      href="#installation"
                      className="text-muted-foreground hover:text-primary line-clamp-1 transition-colors"
                    >
                      Installation
                    </Link>
                  </li>
                  {componentExamples.length > 0 && (
                    <li>
                      <span className="font-medium text-foreground">
                        Examples
                      </span>
                      <ul className="space-y-2 m-0 mt-2 pl-3 border-border/50 border-l list-none">
                        {componentExamples.map((example) => (
                          <li key={example.name}>
                            <Link
                              href={`#${example.name}`}
                              className="text-muted-foreground hover:text-primary line-clamp-1 transition-colors"
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
          </aside>
        </div>
      </div>
    </div>
  );
}
