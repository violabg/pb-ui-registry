import { InstallCommand } from "@/components/install-command";
import { ArrowRight, CheckCircle2, Package, Terminal } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export default function GetStartedPage() {
  return (
    <div className="mx-auto px-4 py-16 max-w-7xl container">
      <div className="relative mb-16 overflow-hidden">
        <div className="z-10 relative flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/20 rounded-full w-fit font-medium text-primary text-sm">
            <Package className="size-4" />
            <span>Registry, not library</span>
          </div>
          <h1 className="font-bold text-5xl sm:text-7xl leading-tight tracking-tight">
            Build faster with <span className="text-primary">pb-ui</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-xl/relaxed">
            A curated collection of copy-paste components built with Radix UI
            and Tailwind CSS. Designed to be customized and adapted to your
            needs.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/components"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-medium text-primary-foreground transition-colors"
            >
              Browse Components
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="top-1/2 -right-20 -z-10 absolute bg-primary/10 blur-3xl rounded-full w-[600px] h-[600px] -translate-y-1/2 pointer-events-none" />
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <div className="bg-card/50 p-6 border rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <CheckCircle2 className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">Re-usable</h3>
          </div>
          <p className="text-muted-foreground">
            Components that you can copy and paste into your apps. Accessible,
            customizable, and open source.
          </p>
        </div>
        <div className="bg-card/50 p-6 border rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <Terminal className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">CLI Ready</h3>
          </div>
          <p className="text-muted-foreground">
            Install components directly from the command line using the shadcn
            CLI tool.
          </p>
        </div>
        <div className="bg-card/50 p-6 border rounded-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <Package className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">Modern Stack</h3>
          </div>
          <p className="text-muted-foreground">
            Built with the latest technologies: React 19, Next.js 16, and
            Tailwind CSS v4.
          </p>
        </div>
      </div>

      <div className="bg-muted/30 p-8 md:p-12 border border-border/50 rounded-3xl">
        <div className="flex lg:flex-row flex-col lg:items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="font-bold text-3xl tracking-tight">
              Start building in seconds
            </h2>
            <p className="text-muted-foreground text-lg">
              Add components to your project using the CLI. No complex setup or
              configuration required.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex justify-center items-center bg-background mt-1 border border-primary rounded-full size-6 text-primary shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Run the add command</h4>
                  <p className="text-muted-foreground text-sm">
                    Use the shadcn CLI to add new components.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex justify-center items-center bg-background mt-1 border border-primary rounded-full size-6 text-primary shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Customize code</h4>
                  <p className="text-muted-foreground text-sm">
                    The code is yours. Modify it to fit your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-background shadow-2xl p-2 rounded-xl">
              <div className="flex items-center gap-2 px-4 py-2 border-b">
                <div className="bg-red-500 rounded-full size-3" />
                <div className="bg-yellow-500 rounded-full size-3" />
                <div className="bg-green-500 rounded-full size-3" />
              </div>
              <div className="p-4">
                <InstallCommand
                  command="npx shadcn@latest add"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
