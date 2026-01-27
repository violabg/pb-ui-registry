import fs from "node:fs/promises";
import path from "node:path";

export type RegistryFile = {
  path: string;
  type: "registry:ui" | "registry:component" | "registry:lib";
  target?: string;
  content?: string;
};

export type RegistryItem = {
  name: string;
  title: string;
  description?: string;
  type: "registry:ui" | "registry:component" | "registry:lib";
  files?: RegistryFile[];
  registryDependencies?: string[];
  dependencies?: string[];
  docs?: string;
  categories?: string[];
};

export type RegistryIndex = {
  name: string;
  homepage: string;
  items: RegistryItem[];
};

export type RegistryItemSummary = Pick<
  RegistryItem,
  "name" | "title" | "description" | "docs" | "categories"
>;

const registryItems: RegistryItem[] = [
  {
    name: "alert-dialog",
    title: "Alert Dialog",
    description: "Modal dialog with actions for critical decisions.",
    type: "registry:ui",
    docs: "/components/alert-dialog",
    categories: ["overlay", "feedback"],
    files: [
      {
        path: "components/ui/alert-dialog.tsx",
        target: "components/ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    title: "Badge",
    description: "Small status or label indicator.",
    type: "registry:ui",
    docs: "/components/badge",
    categories: ["data-display"],
    files: [
      {
        path: "components/ui/badge.tsx",
        target: "components/ui/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "button",
    title: "Button",
    description: "Interactive button with variants and sizes.",
    type: "registry:ui",
    docs: "/components/button",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/button.tsx",
        target: "components/ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card",
    title: "Card",
    description: "Container for grouped content and actions.",
    type: "registry:ui",
    docs: "/components/card",
    categories: ["layout"],
    files: [
      {
        path: "components/ui/card.tsx",
        target: "components/ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "combobox",
    title: "Combobox",
    description: "Searchable select input with options list.",
    type: "registry:ui",
    docs: "/components/combobox",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/combobox.tsx",
        target: "components/ui/combobox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dropdown-menu",
    title: "Dropdown Menu",
    description: "Contextual menu with groups and shortcuts.",
    type: "registry:ui",
    docs: "/components/dropdown-menu",
    categories: ["overlay"],
    files: [
      {
        path: "components/ui/dropdown-menu.tsx",
        target: "components/ui/dropdown-menu.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "field",
    title: "Field",
    description: "Form field wrappers and labels.",
    type: "registry:ui",
    docs: "/components/field",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/field.tsx",
        target: "components/ui/field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input",
    title: "Input",
    description: "Text input with consistent styling.",
    type: "registry:ui",
    docs: "/components/input",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/input.tsx",
        target: "components/ui/input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "input-group",
    title: "Input Group",
    description: "Grouped input with add-ons.",
    type: "registry:ui",
    docs: "/components/input-group",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/input-group.tsx",
        target: "components/ui/input-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "label",
    title: "Label",
    description: "Accessible label for form controls.",
    type: "registry:ui",
    docs: "/components/label",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/label.tsx",
        target: "components/ui/label.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "select",
    title: "Select",
    description: "Custom select with grouped options.",
    type: "registry:ui",
    docs: "/components/select",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/select.tsx",
        target: "components/ui/select.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "separator",
    title: "Separator",
    description: "Horizontal or vertical divider.",
    type: "registry:ui",
    docs: "/components/separator",
    categories: ["layout"],
    files: [
      {
        path: "components/ui/separator.tsx",
        target: "components/ui/separator.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "textarea",
    title: "Textarea",
    description: "Multiline text input.",
    type: "registry:ui",
    docs: "/components/textarea",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/textarea.tsx",
        target: "components/ui/textarea.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tag-input",
    title: "Tag Input",
    description: "Create tags from typed input and enter press.",
    type: "registry:ui",
    docs: "/components/tag-input",
    categories: ["forms", "data-entry"],
    registryDependencies: ["badge", "button", "input"],
    files: [
      {
        path: "components/ui/tag-input.tsx",
        target: "components/ui/tag-input.tsx",
        type: "registry:ui",
      },
    ],
  },
];

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.replace(/\/$/, "");
}

function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  );
}

export function getRegistryUrlTemplate(name: string) {
  return `${getSiteUrl()}/registry/${name}`;
}

export function getInstallCommand(name: string) {
  return `npx shadcn@latest add ${getRegistryUrlTemplate(name)}`;
}

export async function getRegistryItems(): Promise<RegistryItemSummary[]> {
  return registryItems.map(
    ({ name, title, description, docs, categories }) => ({
      name,
      title,
      description,
      docs,
      categories,
    }),
  );
}

export async function getRegistryItem(
  name: string,
  withContent = false,
): Promise<RegistryItem | null> {
  const item = registryItems.find((entry) => entry.name === name);

  if (!item) {
    return null;
  }

  if (!withContent || !item.files?.length) {
    return item;
  }

  const files = await Promise.all(
    item.files.map(async (file) => {
      const filePath = path.join(process.cwd(), file.path);
      const content = await fs.readFile(filePath, "utf8");

      return {
        ...file,
        content,
      };
    }),
  );

  return {
    ...item,
    files,
  };
}

export async function getRegistryIndex(): Promise<RegistryIndex> {
  const items = await Promise.all(
    registryItems.map(async (item) => getRegistryItem(item.name, true)),
  );

  return {
    name: "shadcd",
    homepage: getSiteUrl(),
    items: items.filter(Boolean) as RegistryItem[],
  };
}
