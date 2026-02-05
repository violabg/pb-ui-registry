import { Github, List } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="top-0 z-50 relative sticky bg-background/80 backdrop-blur-xl header-gradient-border border-border/60 border-b header-sheen">
      <div className="flex justify-between items-center gap-4 mx-auto px-4 sm:px-6 py-4 w-full max-w-8xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex justify-center items-center border border-border/70 rounded-xl surface-ring size-10 surface-panel-soft">
            <Logo className="size-5 text-primary" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-base tracking-wide">PB-UI</span>
            <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
              Form registry
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-2 py-1 border border-border/70 rounded-full surface-ring surface-panel-soft">
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<Link href="/components">Components</Link>}
            ></Button>
            <Button
              variant="ghost"
              size="sm"
              nativeButton={false}
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
            className="sm:hidden flex"
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
