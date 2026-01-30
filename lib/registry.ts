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
    registryDependencies: ["button"],
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
    registryDependencies: ["button", "input-group"],
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
    registryDependencies: ["label", "separator"],
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
    registryDependencies: ["button", "input", "textarea"],
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
  {
    name: "checkbox",
    title: "Checkbox",
    description: "Toggle control for boolean values.",
    type: "registry:ui",
    docs: "/components/checkbox",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/checkbox.tsx",
        target: "components/ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "switch",
    title: "Switch",
    description: "Toggle switch for on/off states.",
    type: "registry:ui",
    docs: "/components/switch",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/switch.tsx",
        target: "components/ui/switch.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "slider",
    title: "Slider",
    description: "Range input for selecting numeric values.",
    type: "registry:ui",
    docs: "/components/slider",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/slider.tsx",
        target: "components/ui/slider.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "radio-group",
    title: "Radio Group",
    description: "Single selection from multiple options.",
    type: "registry:ui",
    docs: "/components/radio-group",
    categories: ["forms"],
    files: [
      {
        path: "components/ui/radio-group.tsx",
        target: "components/ui/radio-group.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "popover",
    title: "Popover",
    description: "Floating content panel with positioning.",
    type: "registry:ui",
    docs: "/components/popover",
    categories: ["overlay"],
    files: [
      {
        path: "components/ui/popover.tsx",
        target: "components/ui/popover.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "calendar",
    title: "Calendar",
    description: "Date selection calendar component.",
    type: "registry:ui",
    docs: "/components/calendar",
    categories: ["forms", "data-entry"],
    registryDependencies: ["button"],
    dependencies: ["react-day-picker"],
    files: [
      {
        path: "components/ui/calendar.tsx",
        target: "components/ui/calendar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dialog",
    title: "Dialog",
    description: "Modal window for focused interactions.",
    type: "registry:ui",
    docs: "/components/dialog",
    categories: ["overlay"],
    registryDependencies: ["button"],
    files: [
      {
        path: "components/ui/dialog.tsx",
        target: "components/ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "command",
    title: "Command",
    description: "Command palette with search and keyboard navigation.",
    type: "registry:ui",
    docs: "/components/command",
    categories: ["overlay", "navigation"],
    registryDependencies: ["dialog", "input-group"],
    dependencies: ["cmdk"],
    files: [
      {
        path: "components/ui/command.tsx",
        target: "components/ui/command.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "datefield-rac",
    title: "Date Field",
    description: "Date and time input with segmented fields.",
    type: "registry:ui",
    docs: "/components/datefield-rac",
    categories: ["forms", "data-entry"],
    dependencies: ["react-aria-components"],
    files: [
      {
        path: "components/ui/datefield-rac.tsx",
        target: "components/ui/datefield-rac.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "password-input",
    title: "Password Input",
    description: "Text input with visibility toggle for passwords.",
    type: "registry:ui",
    docs: "/components/password-input",
    categories: ["forms"],
    registryDependencies: ["input"],
    files: [
      {
        path: "components/ui/password-input.tsx",
        target: "components/ui/password-input.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "file-upload",
    title: "File Upload",
    description: "Drag and drop file upload with preview.",
    type: "registry:ui",
    docs: "/components/file-upload",
    categories: ["forms", "data-entry"],
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "components/ui/file-upload.tsx",
        target: "components/ui/file-upload.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "multi-select",
    title: "Multi Select",
    description: "Select multiple options with grouped support.",
    type: "registry:ui",
    docs: "/components/multi-select",
    categories: ["forms"],
    registryDependencies: ["combobox"],
    files: [
      {
        path: "components/ui/multi-select.tsx",
        target: "components/ui/multi-select.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    title: "Tabs",
    description: "Tabbed interface for organized content.",
    type: "registry:ui",
    docs: "/components/tabs",
    categories: ["navigation", "layout"],
    files: [
      {
        path: "components/ui/tabs.tsx",
        target: "components/ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-base-controller",
    title: "RHF Base Controller",
    description: "Base controller wrapper for React Hook Form fields.",
    type: "registry:ui",
    docs: "/components/rhf-base-controller",
    categories: ["forms"],
    registryDependencies: ["field"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/base-controller.tsx",
        target: "components/ui/rhf-inputs/base-controller.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-input-field",
    title: "RHF Input Field",
    description: "Text input field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-input-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "input"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/input-field.tsx",
        target: "components/ui/rhf-inputs/input-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-checkbox-field",
    title: "RHF Checkbox Field",
    description: "Checkbox field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-checkbox-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "checkbox"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/checkbox-field.tsx",
        target: "components/ui/rhf-inputs/checkbox-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-select-field",
    title: "RHF Select Field",
    description: "Select field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-select-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "select"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/select-field.tsx",
        target: "components/ui/rhf-inputs/select-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-textarea-field",
    title: "RHF Textarea Field",
    description: "Textarea field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-textarea-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "textarea"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/textarea-field.tsx",
        target: "components/ui/rhf-inputs/textarea-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-radio-group-field",
    title: "RHF Radio Group Field",
    description: "Radio group field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-radio-group-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "radio-group", "label"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/radio-group-field.tsx",
        target: "components/ui/rhf-inputs/radio-group-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-slider-field",
    title: "RHF Slider Field",
    description: "Slider field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-slider-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "slider"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/slider-field.tsx",
        target: "components/ui/rhf-inputs/slider-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-switch-field",
    title: "RHF Switch Field",
    description: "Switch field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-switch-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "switch"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/switch-field.tsx",
        target: "components/ui/rhf-inputs/switch-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-password-field",
    title: "RHF Password Field",
    description: "Password input field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-password-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "password-input"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/password-field.tsx",
        target: "components/ui/rhf-inputs/password-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-input-with-tag-field",
    title: "RHF Input with Tag Field",
    description: "Tag input field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-input-with-tag-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "tag-input"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/input-with-tag-field.tsx",
        target: "components/ui/rhf-inputs/input-with-tag-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-multi-select-field",
    title: "RHF Multi Select Field",
    description: "Multi select field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-multi-select-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "multi-select"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/multi-select-field.tsx",
        target: "components/ui/rhf-inputs/multi-select-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-input-date-field",
    title: "RHF Input Date Field",
    description: "Date input field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-input-date-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "datefield-rac"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/input-date-field.tsx",
        target: "components/ui/rhf-inputs/input-date-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-date-picker-field",
    title: "RHF Date Picker Field",
    description: "Date picker field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-date-picker-field",
    categories: ["forms"],
    registryDependencies: [
      "rhf-base-controller",
      "calendar",
      "popover",
      "button",
    ],
    dependencies: ["react-hook-form", "date-fns"],
    files: [
      {
        path: "components/ui/rhf-inputs/date-picker-field.tsx",
        target: "components/ui/rhf-inputs/date-picker-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-range-date-picker-field",
    title: "RHF Range Date Picker Field",
    description: "Range date picker field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-range-date-picker-field",
    categories: ["forms"],
    registryDependencies: [
      "rhf-base-controller",
      "calendar",
      "popover",
      "button",
    ],
    dependencies: ["react-hook-form", "date-fns"],
    files: [
      {
        path: "components/ui/rhf-inputs/range-date-picker-field.tsx",
        target: "components/ui/rhf-inputs/range-date-picker-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-time-picker-field",
    title: "RHF Time Picker Field",
    description: "Time picker field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-time-picker-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "input"],
    dependencies: ["react-hook-form", "date-fns"],
    files: [
      {
        path: "components/ui/rhf-inputs/time-picker-field.tsx",
        target: "components/ui/rhf-inputs/time-picker-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-file-upload-field",
    title: "RHF File Upload Field",
    description: "File upload field with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-file-upload-field",
    categories: ["forms"],
    registryDependencies: ["rhf-base-controller", "file-upload"],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/file-upload-field.tsx",
        target: "components/ui/rhf-inputs/file-upload-field.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rhf-inputs",
    title: "React Hook Form Inputs (All)",
    description:
      "Complete collection of form field components with React Hook Form integration.",
    type: "registry:ui",
    docs: "/components/rhf-inputs",
    categories: ["forms", "data-entry"],
    registryDependencies: [
      "rhf-base-controller",
      "rhf-input-field",
      "rhf-checkbox-field",
      "rhf-select-field",
      "rhf-textarea-field",
      "rhf-radio-group-field",
      "rhf-slider-field",
      "rhf-switch-field",
      "rhf-password-field",
      "rhf-input-with-tag-field",
      "rhf-multi-select-field",
      "rhf-input-date-field",
      "rhf-date-picker-field",
      "rhf-range-date-picker-field",
      "rhf-time-picker-field",
      "rhf-file-upload-field",
    ],
    dependencies: ["react-hook-form"],
    files: [
      {
        path: "components/ui/rhf-inputs/index.ts",
        target: "components/ui/rhf-inputs/index.ts",
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

/**
 * Helper to get the full registry URL for a dependency.
 * Custom registry items (those defined in this registry) need full URLs,
 * while official shadcn components can use just the name.
 */
function getRegistryDependencyUrl(name: string): string {
  // List of component names that exist in this custom registry
  const customRegistryItems = registryItems.map((item) => item.name);

  if (customRegistryItems.includes(name)) {
    return `${getSiteUrl()}/registry/${name}`;
  }
  // Return just the name for official shadcn components
  return name;
}

/**
 * Transform registryDependencies to use full URLs for custom items
 */
function resolveRegistryDependencies(deps?: string[]): string[] | undefined {
  if (!deps) return undefined;
  return deps.map(getRegistryDependencyUrl);
}

export function getRegistryUrlTemplate(name: string) {
  return `${getSiteUrl()}/registry/${name}`;
}

export function getInstallCommand(name: string) {
  return `npx shadcn@latest add ${getRegistryUrlTemplate(name)}`;
}

export async function getRegistryItems(): Promise<RegistryItemSummary[]> {
  return registryItems
    .map(({ name, title, description, docs, categories }) => ({
      name,
      title,
      description,
      docs,
      categories,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getRegistryItem(
  name: string,
  withContent = false,
): Promise<RegistryItem | null> {
  const item = registryItems.find((entry) => entry.name === name);

  if (!item) {
    return null;
  }

  // Resolve registryDependencies to use full URLs for custom registry items
  const resolvedItem = {
    ...item,
    registryDependencies: resolveRegistryDependencies(
      item.registryDependencies,
    ),
  };

  if (!withContent || !item.files?.length) {
    return resolvedItem;
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
    ...resolvedItem,
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
