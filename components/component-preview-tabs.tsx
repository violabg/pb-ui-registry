"use client";

import Link from "next/link";
import * as React from "react";

import { CodeBlock } from "@/components/code-block";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ComponentPreviewTabsProps = {
  preview?: React.ReactNode;
  code: string;
  language?: string;
  registryHref: string;
};

export function ComponentPreviewTabs({
  preview,
  code,
  language = "tsx",
  registryHref,
}: ComponentPreviewTabsProps) {
  const defaultTab = preview ? "preview" : "code";

  return (
    <section className="border border-border/70 rounded-3xl surface-ring overflow-hidden surface-panel-soft">
      <div className="flex flex-wrap justify-between items-center gap-3 px-4 py-3 border-border border-b">
        <div className="font-medium text-muted-foreground text-sm uppercase tracking-[0.2em]">
          Example
        </div>
        <Link
          className={buttonVariants({
            variant: "outline",
            size: "sm",
          })}
          href={registryHref}
        >
          Registry JSON
        </Link>
      </div>
      <Tabs defaultValue={defaultTab} className="p-4">
        <TabsList>
          <TabsTrigger value="preview" disabled={!preview}>
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="pt-4">
          {preview ?? (
            <p className="text-muted-foreground text-sm">
              Preview coming soon.
            </p>
          )}
        </TabsContent>
        <TabsContent value="code" className="pt-4">
          <CodeBlock code={code} language={language} className="border-0" />
        </TabsContent>
      </Tabs>
    </section>
  );
}
