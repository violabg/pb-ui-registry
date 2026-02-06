import { Github, List, Zap } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="top-0 z-50 sticky bg-background/70 backdrop-blur-xl border-border/50 border-b header-sheen">
      <div className="bottom-0 absolute inset-x-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent h-px" />
      <div className="flex justify-between items-center gap-4 mx-auto px-4 sm:px-6 py-3 w-full max-w-8xl">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex justify-center items-center group-hover:shadow-[0_0_20px_-5px_var(--neon-blue)] border border-primary/30 group-hover:border-primary/60 rounded-lg size-10 overflow-hidden transition-all duration-300 surface-panel">
            <Logo className="z-10 relative size-5 text-primary group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-base tracking-wide">
              PB-UI
            </span>
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
              <Zap className="size-2.5 text-primary" />
              Registry
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <div className="hidden sm:flex items-center gap-1 bg-muted/30 px-1 py-1 border border-border/50 rounded-lg">
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              className="hover:bg-primary/10 rounded-md font-medium hover:text-primary text-sm transition-colors"
              render={<Link href="/components">Components</Link>}
            ></Button>
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              className="hover:bg-primary/10 rounded-md font-medium hover:text-primary text-sm transition-colors"
              render={
                <Link href="/registry.json" target="_blank">
                  Registry
                </Link>
              }
            ></Button>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            className="sm:hidden flex hover:bg-primary/10 hover:text-primary"
            render={
              <Link href="/components" aria-label="Components">
                <List className="size-4" />
              </Link>
            }
          ></Button>
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            className="hover:bg-primary/10 hover:text-primary"
            render={
              <Link
                href="https://github.com/violabg/pb-ui-registry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <Github className="size-4" />
              </Link>
            }
          ></Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
