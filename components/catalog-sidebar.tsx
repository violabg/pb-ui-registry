import { Blocks } from "lucide-react";
import Link from "next/link";

interface Section {
  key: string;
  items: Array<{
    name: string;
    title: string;
  }>;
}

interface CatalogSidebarProps {
  sections: Section[];
  currentItemName?: string;
}

export function CatalogSidebar({
  sections,
  currentItemName,
}: CatalogSidebarProps) {
  return (
    <aside className="hidden lg:block top-20 sticky self-start border border-border/50 rounded-xl text-sm surface-panel-soft">
      <div className="p-5 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <div className="flex items-center gap-2 mb-5 pb-3 border-border/50 border-b">
          <Blocks className="size-4 text-primary" />
          <span className="font-display font-semibold text-xs uppercase tracking-[0.15em]">
            Catalog
          </span>
        </div>
        {sections.map((section) => (
          <div key={section.key} className="mb-6 last:mb-0">
            <div className="mb-2 font-semibold text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              {section.key}
            </div>
            <ul className="space-y-1 m-0 p-0 list-none">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/components/${item.name}`}
                    className={`block py-1 text-sm transition-colors ${
                      item.name === currentItemName
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
