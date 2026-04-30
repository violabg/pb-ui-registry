import {
  AlertDialogDemo,
  BadgeDemo,
  ButtonDemo,
  ButtonSizes,
  CalendarDemo,
  CardDemo,
  CheckboxDemo,
  CheckboxDisabled,
  ColorPickerDemo,
  ComboboxDemo,
  CommandDemo,
  DateFieldDefaultValueDemo,
  DateFieldDemo,
  DialogDemo,
  DropdownMenuDemo,
  FieldDemo,
  FileUploadDemo,
  InputDemo,
  InputGroupDemo,
  InputOtpDemo,
  LabelDemo,
  MultiSelectDemo,
  MultiSelectGroupedDemo,
  NumberInputDecimalDemo,
  NumberInputDemo,
  PasswordInputDemo,
  PopoverDemo,
  RadioGroupDemo,
  RatingDemo,
  RatingHalf,
  RatingReadOnly,
  RhfCheckboxFieldDemo,
  RhfCheckboxGroupFieldDemo,
  RhfCheckboxGroupFieldHorizontalDemo,
  RhfColorPickerFieldDemo,
  RhfComboboxFieldDemo,
  RhfCurrencyFieldCentsDemo,
  RhfCurrencyFieldDemo,
  RhfCurrencyFieldEuroDemo,
  RhfDatePickerFieldDefaultValuesDemo,
  RhfDatePickerFieldDemo,
  RhfDatePickerFieldFormatDemo,
  RhfDateTimePickerFieldDemo,
  RhfFileUploadFieldDemo,
  RhfInputDateFieldDefaultDemo,
  RhfInputDateFieldEmptyDemo,
  RhfInputFieldDemo,
  RhfInputsDemo,
  RhfInputWithTagFieldClearDemo,
  RhfInputWithTagFieldDemo,
  RhfMultiSelectFieldClearDemo,
  RhfMultiSelectFieldDemo,
  RhfNumberFieldDecimalDemo,
  RhfNumberFieldDemo,
  RhfNumberFieldLocaleDemo,
  RhfOtpFieldDemo,
  RhfPasswordFieldDemo,
  RhfPhoneFieldDemo,
  RhfRadioGroupFieldDemo,
  RhfRangeDatePickerFieldDefaultValuesDemo,
  RhfRangeDatePickerFieldDemo,
  RhfRatingFieldDemo,
  RhfRatingFieldHalfDemo,
  RhfSelectFieldDemo,
  RhfSliderFieldDemo,
  RhfSwitchFieldDemo,
  RhfTextareaFieldDemo,
  RhfTimePickerFieldDemo,
  SelectDemo,
  SeparatorDemo,
  SliderDemo,
  SliderRange,
  SwitchDemo,
  SwitchSmall,
  TabsDemo,
  TabsLineVariant,
  TagInputClear,
  TagInputDemo,
  TagInputDisabled,
  TagInputMax,
  TextareaDemo,
} from "@/components/examples";
import { getExampleCode } from "@/lib/example-code";
import {
  exampleEnabledRegistryItemNames,
  isExampleEnabledRegistryItem,
} from "@/lib/registry";
import React from "react";

export type Example = {
  name: string;
  title: string;
  component: React.ReactNode;
  code: string;
  sourceExportName?: string;
};

type ExampleDefinition = Omit<Example, "code"> & {
  code?: unknown;
};

const exampleDefinitions: Record<string, ExampleDefinition[]> = {
  "tag-input": [
    {
      name: "default",
      title: "Default",
      component: <TagInputDemo />,
      code: "",
      sourceExportName: "TagInputDemo",
    },
    {
      name: "max-tags",
      title: "Max Tags (3)",
      component: <TagInputMax />,
      code: "",
      sourceExportName: "TagInputMax",
    },
    {
      name: "disabled",
      title: "Disabled",
      component: <TagInputDisabled />,
      code: "",
      sourceExportName: "TagInputDisabled",
    },
    {
      name: "clear",
      title: "With Clear Button",
      component: <TagInputClear />,
      code: "",
      sourceExportName: "TagInputClear",
    },
  ],
  "alert-dialog": [
    {
      name: "default",
      title: "Default",
      component: <AlertDialogDemo />,
      code: "",
      sourceExportName: "AlertDialogDemo",
    },
  ],
  badge: [
    {
      name: "default",
      title: "Variants",
      component: <BadgeDemo />,
      code: "",
      sourceExportName: "BadgeDemo",
    },
  ],
  button: [
    {
      name: "default",
      title: "Variants",
      component: <ButtonDemo />,
      code: "",
      sourceExportName: "ButtonDemo",
    },
    {
      name: "sizes",
      title: "Sizes",
      component: <ButtonSizes />,
      code: "",
      sourceExportName: "ButtonSizes",
    },
  ],
  card: [
    {
      name: "default",
      title: "Default",
      component: <CardDemo />,
      code: "",
      sourceExportName: "CardDemo",
    },
  ],
  combobox: [
    {
      name: "default",
      title: "Default",
      component: <ComboboxDemo />,
      code: "",
      sourceExportName: "ComboboxDemo",
    },
  ],
  "dropdown-menu": [
    {
      name: "default",
      title: "Default",
      component: <DropdownMenuDemo />,
      code: "",
      sourceExportName: "DropdownMenuDemo",
    },
  ],
  field: [
    {
      name: "default",
      title: "Default",
      component: <FieldDemo />,
      code: "",
      sourceExportName: "FieldDemo",
    },
  ],
  input: [
    {
      name: "default",
      title: "Default",
      component: <InputDemo />,
      code: "",
      sourceExportName: "InputDemo",
    },
  ],
  "input-group": [
    {
      name: "default",
      title: "Default",
      component: <InputGroupDemo />,
      code: "",
      sourceExportName: "InputGroupDemo",
    },
  ],
  label: [
    {
      name: "default",
      title: "Default",
      component: <LabelDemo />,
      code: "",
      sourceExportName: "LabelDemo",
    },
  ],
  select: [
    {
      name: "default",
      title: "Default",
      component: <SelectDemo />,
      code: "",
      sourceExportName: "SelectDemo",
    },
  ],
  separator: [
    {
      name: "default",
      title: "Default",
      component: <SeparatorDemo />,
      code: "",
      sourceExportName: "SeparatorDemo",
    },
  ],
  textarea: [
    {
      name: "default",
      title: "Default",
      component: <TextareaDemo />,
      code: "",
      sourceExportName: "TextareaDemo",
    },
  ],
  checkbox: [
    {
      name: "default",
      title: "Default",
      component: <CheckboxDemo />,
      code: "",
      sourceExportName: "CheckboxDemo",
    },
    {
      name: "disabled",
      title: "Disabled",
      component: <CheckboxDisabled />,
      code: "",
      sourceExportName: "CheckboxDisabled",
    },
  ],
  switch: [
    {
      name: "default",
      title: "Default",
      component: <SwitchDemo />,
      code: "",
      sourceExportName: "SwitchDemo",
    },
    {
      name: "small",
      title: "Small Size",
      component: <SwitchSmall />,
      code: "",
      sourceExportName: "SwitchSmall",
    },
  ],
  slider: [
    {
      name: "default",
      title: "Default",
      component: <SliderDemo />,
      code: "",
      sourceExportName: "SliderDemo",
    },
    {
      name: "range",
      title: "Range",
      component: <SliderRange />,
      code: "",
      sourceExportName: "SliderRange",
    },
  ],
  "radio-group": [
    {
      name: "default",
      title: "Default",
      component: <RadioGroupDemo />,
      code: "",
      sourceExportName: "RadioGroupDemo",
    },
  ],
  popover: [
    {
      name: "default",
      title: "Default",
      component: <PopoverDemo />,
      code: "",
      sourceExportName: "PopoverDemo",
    },
  ],
  dialog: [
    {
      name: "default",
      title: "Default",
      component: <DialogDemo />,
      code: "",
      sourceExportName: "DialogDemo",
    },
  ],
  command: [
    {
      name: "default",
      title: "Default",
      component: <CommandDemo />,
      code: "",
      sourceExportName: "CommandDemo",
    },
  ],
  "datefield-rac": [
    {
      name: "default",
      title: "Default",
      component: <DateFieldDemo />,
      code: "",
      sourceExportName: "DateFieldDemo",
    },
    {
      name: "default-value",
      title: "Default Value",
      component: <DateFieldDefaultValueDemo />,
      code: "",
      sourceExportName: "DateFieldDefaultValueDemo",
    },
  ],
  "password-input": [
    {
      name: "default",
      title: "Default",
      component: <PasswordInputDemo />,
      code: "",
      sourceExportName: "PasswordInputDemo",
    },
  ],
  "file-upload": [
    {
      name: "default",
      title: "Default",
      component: <FileUploadDemo />,
      code: "",
      sourceExportName: "FileUploadDemo",
    },
  ],
  "multi-select": [
    {
      name: "default",
      title: "Default",
      component: <MultiSelectDemo />,
      code: "",
      sourceExportName: "MultiSelectDemo",
    },
    {
      name: "grouped",
      title: "Grouped",
      component: <MultiSelectGroupedDemo />,
      code: "",
      sourceExportName: "MultiSelectGroupedDemo",
    },
  ],
  tabs: [
    {
      name: "default",
      title: "Default",
      component: <TabsDemo />,
      code: "",
      sourceExportName: "TabsDemo",
    },
    {
      name: "line-variant",
      title: "Line Variant",
      component: <TabsLineVariant />,
      code: "",
      sourceExportName: "TabsLineVariant",
    },
  ],
  "rhf-inputs": [
    {
      name: "default",
      title: "Overview",
      component: <RhfInputsDemo />,
      code: "",
      sourceExportName: "RhfInputsDemo",
    },
  ],
  "rhf-input-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfInputFieldDemo />,
      code: "",
      sourceExportName: "RhfInputFieldDemo",
    },
  ],
  "rhf-checkbox-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfCheckboxFieldDemo />,
      code: "",
      sourceExportName: "RhfCheckboxFieldDemo",
    },
  ],
  "rhf-select-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfSelectFieldDemo />,
      code: "",
      sourceExportName: "RhfSelectFieldDemo",
    },
  ],
  "rhf-textarea-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfTextareaFieldDemo />,
      code: "",
      sourceExportName: "RhfTextareaFieldDemo",
    },
  ],
  "rhf-radio-group-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfRadioGroupFieldDemo />,
      code: "",
      sourceExportName: "RhfRadioGroupFieldDemo",
    },
  ],
  "rhf-slider-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfSliderFieldDemo />,
      code: "",
      sourceExportName: "RhfSliderFieldDemo",
    },
  ],
  "rhf-switch-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfSwitchFieldDemo />,
      code: "",
      sourceExportName: "RhfSwitchFieldDemo",
    },
  ],
  "rhf-password-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfPasswordFieldDemo />,
      code: "",
      sourceExportName: "RhfPasswordFieldDemo",
    },
  ],
  "rhf-input-with-tag-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfInputWithTagFieldDemo />,
      code: "",
      sourceExportName: "RhfInputWithTagFieldDemo",
    },
    {
      name: "show-clear",
      title: "With Clear Button",
      component: <RhfInputWithTagFieldClearDemo />,
      code: "",
      sourceExportName: "RhfInputWithTagFieldClearDemo",
    },
  ],
  "rhf-multi-select-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfMultiSelectFieldDemo />,
      code: "",
      sourceExportName: "RhfMultiSelectFieldDemo",
    },
    {
      name: "show-clear",
      title: "With Clear Button",
      component: <RhfMultiSelectFieldClearDemo />,
      code: "",
      sourceExportName: "RhfMultiSelectFieldClearDemo",
    },
  ],
  "rhf-file-upload-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfFileUploadFieldDemo />,
      code: "",
      sourceExportName: "RhfFileUploadFieldDemo",
    },
  ],
  "rhf-input-date-field": [
    {
      name: "empty",
      title: "Empty",
      component: <RhfInputDateFieldEmptyDemo />,
      code: "",
      sourceExportName: "RhfInputDateFieldEmptyDemo",
    },
    {
      name: "default-values",
      title: "Default Values",
      component: <RhfInputDateFieldDefaultDemo />,
      code: "",
      sourceExportName: "RhfInputDateFieldDefaultDemo",
    },
  ],
  "rhf-date-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfDatePickerFieldDemo />,
      code: "",
      sourceExportName: "RhfDatePickerFieldDemo",
    },
    {
      name: "default-values",
      title: "Default Values",
      component: <RhfDatePickerFieldDefaultValuesDemo />,
      code: "",
      sourceExportName: "RhfDatePickerFieldDefaultValuesDemo",
    },
    {
      name: "custom-format",
      title: "Custom Format",
      component: <RhfDatePickerFieldFormatDemo />,
      code: "",
      sourceExportName: "RhfDatePickerFieldFormatDemo",
    },
  ],
  "rhf-date-time-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfDateTimePickerFieldDemo />,
      code: "",
      sourceExportName: "RhfDateTimePickerFieldDemo",
    },
  ],
  "rhf-range-date-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfRangeDatePickerFieldDemo />,
      code: "",
      sourceExportName: "RhfRangeDatePickerFieldDemo",
    },
    {
      name: "default-values",
      title: "Default Values",
      component: <RhfRangeDatePickerFieldDefaultValuesDemo />,
      code: "",
      sourceExportName: "RhfRangeDatePickerFieldDefaultValuesDemo",
    },
  ],
  "rhf-time-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfTimePickerFieldDemo />,
      code: "",
      sourceExportName: "RhfTimePickerFieldDemo",
    },
  ],
  "rhf-base-controller": [
    {
      name: "default",
      title: "Usage",
      component: <RhfInputFieldDemo />,
      code: "",
      sourceExportName: "RhfInputFieldDemo",
    },
  ],
  // New Base Components
  "number-input": [
    {
      name: "default",
      title: "Default",
      component: <NumberInputDemo />,
      code: "",
      sourceExportName: "NumberInputDemo",
    },
    {
      name: "decimal",
      title: "Decimal",
      component: <NumberInputDecimalDemo />,
      code: "",
      sourceExportName: "NumberInputDecimalDemo",
    },
  ],
  "input-otp": [
    {
      name: "default",
      title: "Default",
      component: <InputOtpDemo />,
      code: "",
      sourceExportName: "InputOtpDemo",
    },
  ],
  "color-picker": [
    {
      name: "default",
      title: "Default",
      component: <ColorPickerDemo />,
      code: "",
      sourceExportName: "ColorPickerDemo",
    },
  ],
  rating: [
    {
      name: "default",
      title: "Default",
      component: <RatingDemo />,
      code: "",
      sourceExportName: "RatingDemo",
    },
    {
      name: "readonly",
      title: "Read Only",
      component: <RatingReadOnly />,
      code: "",
      sourceExportName: "RatingReadOnly",
    },
    {
      name: "half",
      title: "Half Star",
      component: <RatingHalf />,
      code: "",
      sourceExportName: "RatingHalf",
    },
  ],
  // New RHF Components
  "rhf-combobox-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfComboboxFieldDemo />,
      code: "",
      sourceExportName: "RhfComboboxFieldDemo",
    },
  ],
  "rhf-number-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfNumberFieldDemo />,
      code: "",
      sourceExportName: "RhfNumberFieldDemo",
    },
    {
      name: "decimal",
      title: "Decimal",
      component: <RhfNumberFieldDecimalDemo />,
      code: "",
      sourceExportName: "RhfNumberFieldDecimalDemo",
    },
    {
      name: "locale",
      title: "Locale aware (it-IT)",
      component: <RhfNumberFieldLocaleDemo />,
      code: "",
      sourceExportName: "RhfNumberFieldLocaleDemo",
    },
  ],
  "rhf-otp-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfOtpFieldDemo />,
      code: "",
      sourceExportName: "RhfOtpFieldDemo",
    },
  ],
  "rhf-checkbox-group-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfCheckboxGroupFieldDemo />,
      code: "",
      sourceExportName: "RhfCheckboxGroupFieldDemo",
    },
    {
      name: "horizontal",
      title: "Horizontal",
      component: <RhfCheckboxGroupFieldHorizontalDemo />,
      code: "",
      sourceExportName: "RhfCheckboxGroupFieldHorizontalDemo",
    },
  ],
  "rhf-phone-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfPhoneFieldDemo />,
      code: "",
      sourceExportName: "RhfPhoneFieldDemo",
    },
  ],
  "rhf-currency-field": [
    {
      name: "default",
      title: "Default (USD)",
      component: <RhfCurrencyFieldDemo />,
      code: "",
      sourceExportName: "RhfCurrencyFieldDemo",
    },
    {
      name: "euro",
      title: "Euro",
      component: <RhfCurrencyFieldEuroDemo />,
      code: "",
      sourceExportName: "RhfCurrencyFieldEuroDemo",
    },
    {
      name: "with-cents",
      title: "With Cents",
      component: <RhfCurrencyFieldCentsDemo />,
      code: "",
      sourceExportName: "RhfCurrencyFieldCentsDemo",
    },
  ],
  "rhf-color-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfColorPickerFieldDemo />,
      code: "",
      sourceExportName: "RhfColorPickerFieldDemo",
    },
  ],
  "rhf-rating-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfRatingFieldDemo />,
      code: "",
      sourceExportName: "RhfRatingFieldDemo",
    },
    {
      name: "half",
      title: "Half Star",
      component: <RhfRatingFieldHalfDemo />,
      code: "",
      sourceExportName: "RhfRatingFieldHalfDemo",
    },
  ],
  calendar: [
    {
      name: "default",
      title: "Default",
      component: <CalendarDemo />,
      code: "",
      sourceExportName: "CalendarDemo",
    },
  ],
};

function createValidatedExamples(definitions: Record<string, Example[]>) {
  const registryItemNames = new Set(exampleEnabledRegistryItemNames);
  const definitionNames = Object.keys(definitions);
  const unknownExampleItems = definitionNames.filter(
    (name) => !registryItemNames.has(name),
  );
  const missingExampleItems = exampleEnabledRegistryItemNames.filter((name) => {
    const itemExamples = definitions[name];

    return !itemExamples || itemExamples.length === 0;
  });
  const blankCodeExamples = Object.entries(definitions).flatMap(
    ([name, itemExamples]) =>
      itemExamples
        .filter((example) => example.code.trim().length === 0)
        .map((example) => `${name}#${example.name}`),
  );

  if (
    unknownExampleItems.length > 0 ||
    missingExampleItems.length > 0 ||
    blankCodeExamples.length > 0
  ) {
    throw new Error(
      [
        "Invalid example registry state.",
        unknownExampleItems.length > 0
          ? `Unknown example items: ${unknownExampleItems.join(", ")}`
          : null,
        missingExampleItems.length > 0
          ? `Missing required examples: ${missingExampleItems.join(", ")}`
          : null,
        blankCodeExamples.length > 0
          ? `Examples missing code: ${blankCodeExamples.join(", ")}`
          : null,
      ]
        .filter(Boolean)
        .join(" "),
    );
  }

  return definitions;
}

function hydrateExampleCode(
  definitions: Record<string, ExampleDefinition[]>,
): Record<string, Example[]> {
  return Object.fromEntries(
    Object.entries(definitions).map(([name, itemExamples]) => [
      name,
      itemExamples.map((example) => ({
        ...example,
        code: getExampleCode(
          example.component,
          example.code,
          example.sourceExportName,
        ),
      })),
    ]),
  );
}

const examples = createValidatedExamples(
  hydrateExampleCode(exampleDefinitions),
);

export function getExampleItemNames() {
  return Object.keys(exampleDefinitions);
}

export function getExamples(name: string): Example[] {
  return examples[name] ?? [];
}

export function getCurrentExample(name: string): Example | null {
  return getExamples(name)[0] ?? null;
}

export function hasExamples(name: string) {
  if (!isExampleEnabledRegistryItem(name)) {
    return false;
  }

  return getExamples(name).length > 0;
}
