"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type InstallCommandProps = {
  command: string;
  className?: string;
};

export function InstallCommand({ command, className }: InstallCommandProps) {
  // Extract the args from the command (remove "npx shadcn@latest add ")
  // The command comes in as "npx shadcn@latest add http://..."
  // We handle both "npx shadcn@latest add" and just "shadcn@latest add" just in case.
  const args = command
    .replace(/^npx shadcn@latest add /, "")
    .replace(/^pnpm dlx shadcn@latest add /, "");

  const commands = {
    npm: `npx shadcn@latest add ${args}`,
    pnpm: `pnpm dlx shadcn@latest add ${args}`,
    yarn: `npx shadcn@latest add ${args}`,
    bun: `bun x shadcn@latest add ${args}`,
  };

  const [hasCopied, setHasCopied] = React.useState(false);
  const [activeTab, setActiveTab] =
    React.useState<keyof typeof commands>("npm");

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  const copyToClipboard = React.useCallback((value: string) => {
    navigator.clipboard.writeText(value);
    setHasCopied(true);
  }, []);

  return (
    <div
      className={cn(
        "relative bg-zinc-950 p-4 rounded-xl ring-1 ring-zinc-800",
        className,
      )}
    >
      <Tabs
        defaultValue="npm"
        onValueChange={(value) => setActiveTab(value as keyof typeof commands)}
        className="relative"
      >
        <div className="flex justify-between items-center pb-3">
          <TabsList className="gap-4 bg-transparent p-0">
            {Object.keys(commands).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none p-0 pb-1 border-transparent data-[state=active]:border-white border-b-2 rounded-none h-auto text-zinc-400 data-[state=active]:text-zinc-50 hover:text-zinc-200 transition-colors"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(commands).map(([key, cmd]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <div className="flex justify-between items-center gap-4">
              <code className="flex-1 font-mono text-zinc-50 text-sm break-all">
                {cmd}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-zinc-800 w-6 h-6 text-zinc-400 hover:text-zinc-50"
                onClick={() => copyToClipboard(cmd)}
              >
                {hasCopied ? (
                  <CheckIcon className="w-3 h-3" />
                ) : (
                  <CopyIcon className="w-3 h-3" />
                )}
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
