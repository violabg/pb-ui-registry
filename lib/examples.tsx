import {
  AlertDialogDemo,
  AlertDialogDemoCode,
  BadgeDemo,
  BadgeDemoCode,
  ButtonDemo,
  ButtonDemoCode,
  ButtonSizes,
  ButtonSizesCode,
  CalendarDemo,
  CalendarDemoCode,
  CardDemo,
  CardDemoCode,
  CheckboxDemo,
  CheckboxDemoCode,
  CheckboxDisabled,
  CheckboxDisabledCode,
  ColorPickerDemo,
  ColorPickerDemoCode,
  ComboboxDemo,
  ComboboxDemoCode,
  CommandDemo,
  CommandDemoCode,
  DateFieldDefaultValueDemo,
  DateFieldDefaultValueDemoCode,
  DateFieldDemo,
  DateFieldDemoCode,
  DialogDemo,
  DialogDemoCode,
  DropdownMenuDemo,
  DropdownMenuDemoCode,
  FieldDemo,
  FieldDemoCode,
  FileUploadDemo,
  FileUploadDemoCode,
  InputDemo,
  InputDemoCode,
  InputGroupDemo,
  InputGroupDemoCode,
  InputOtpDemo,
  InputOtpDemoCode,
  LabelDemo,
  LabelDemoCode,
  MultiSelectDemo,
  MultiSelectDemoCode,
  MultiSelectGroupedDemo,
  MultiSelectGroupedDemoCode,
  NumberInputDecimalDemo,
  NumberInputDecimalDemoCode,
  NumberInputDemo,
  NumberInputDemoCode,
  PasswordInputDemo,
  PasswordInputDemoCode,
  PopoverDemo,
  PopoverDemoCode,
  RadioGroupDemo,
  RadioGroupDemoCode,
  RatingDemo,
  RatingDemoCode,
  RatingHalf,
  RatingHalfCode,
  RatingReadOnly,
  RatingReadOnlyCode,
  RhfCheckboxFieldDemo,
  RhfCheckboxFieldDemoCode,
  RhfCheckboxGroupFieldDemo,
  RhfCheckboxGroupFieldDemoCode,
  RhfColorPickerFieldDemo,
  RhfColorPickerFieldDemoCode,
  RhfComboboxFieldDemo,
  RhfComboboxFieldDemoCode,
  RhfCurrencyFieldCentsDemo,
  RhfCurrencyFieldCentsDemoCode,
  RhfCurrencyFieldDemo,
  RhfCurrencyFieldDemoCode,
  RhfCurrencyFieldEuroDemo,
  RhfCurrencyFieldEuroDemoCode,
  RhfDatePickerFieldDefaultValuesDemo,
  RhfDatePickerFieldDefaultValuesDemoCode,
  RhfDatePickerFieldDemo,
  RhfDatePickerFieldDemoCode,
  RhfDatePickerFieldFormatDemo,
  RhfDatePickerFieldFormatDemoCode,
  RhfDateTimePickerFieldDemo,
  RhfDateTimePickerFieldDemoCode,
  RhfFileUploadFieldDemo,
  RhfFileUploadFieldDemoCode,
  RhfInputDateFieldDefaultDemo,
  RhfInputDateFieldDefaultDemoCode,
  RhfInputDateFieldEmptyDemo,
  RhfInputDateFieldEmptyDemoCode,
  RhfInputFieldDemo,
  RhfInputFieldDemoCode,
  RhfInputsDemo,
  RhfInputsDemoCode,
  RhfInputWithTagFieldDemo,
  RhfInputWithTagFieldDemoCode,
  RhfMultiSelectFieldDemo,
  RhfMultiSelectFieldDemoCode,
  RhfNumberFieldDecimalDemo,
  RhfNumberFieldDecimalDemoCode,
  RhfNumberFieldDemo,
  RhfNumberFieldDemoCode,
  RhfOtpFieldDemo,
  RhfOtpFieldDemoCode,
  RhfPasswordFieldDemo,
  RhfPasswordFieldDemoCode,
  RhfPhoneFieldDemo,
  RhfPhoneFieldDemoCode,
  RhfRadioGroupFieldDemo,
  RhfRadioGroupFieldDemoCode,
  RhfRangeDatePickerFieldDefaultValuesDemo,
  RhfRangeDatePickerFieldDefaultValuesDemoCode,
  RhfRangeDatePickerFieldDemo,
  RhfRangeDatePickerFieldDemoCode,
  RhfRatingFieldDemo,
  RhfRatingFieldDemoCode,
  RhfRatingFieldHalfDemo,
  RhfRatingFieldHalfDemoCode,
  RhfSelectFieldDemo,
  RhfSelectFieldDemoCode,
  RhfSliderFieldDemo,
  RhfSliderFieldDemoCode,
  RhfSwitchFieldDemo,
  RhfSwitchFieldDemoCode,
  RhfTextareaFieldDemo,
  RhfTextareaFieldDemoCode,
  RhfTimePickerFieldDemo,
  RhfTimePickerFieldDemoCode,
  SelectDemo,
  SelectDemoCode,
  SeparatorDemo,
  SeparatorDemoCode,
  SliderDemo,
  SliderDemoCode,
  SliderRange,
  SliderRangeCode,
  SwitchDemo,
  SwitchDemoCode,
  SwitchSmall,
  SwitchSmallCode,
  TabsDemo,
  TabsDemoCode,
  TabsLineVariant,
  TabsLineVariantCode,
  TagInputDemo,
  TagInputDemoCode,
  TagInputDisabled,
  TagInputDisabledCode,
  TagInputMax,
  TagInputMaxCode,
  TextareaDemo,
  TextareaDemoCode,
} from "@/components/examples";
import React from "react";

export type Example = {
  name: string;
  title: string;
  component: React.ReactNode;
  code: string;
};

export const examples: Record<string, Example[]> = {
  "tag-input": [
    {
      name: "default",
      title: "Default",
      component: <TagInputDemo />,
      code: TagInputDemoCode,
    },
    {
      name: "max-tags",
      title: "Max Tags (3)",
      component: <TagInputMax />,
      code: TagInputMaxCode,
    },
    {
      name: "disabled",
      title: "Disabled",
      component: <TagInputDisabled />,
      code: TagInputDisabledCode,
    },
  ],
  "alert-dialog": [
    {
      name: "default",
      title: "Default",
      component: <AlertDialogDemo />,
      code: AlertDialogDemoCode,
    },
  ],
  badge: [
    {
      name: "default",
      title: "Variants",
      component: <BadgeDemo />,
      code: BadgeDemoCode,
    },
  ],
  button: [
    {
      name: "default",
      title: "Variants",
      component: <ButtonDemo />,
      code: ButtonDemoCode,
    },
    {
      name: "sizes",
      title: "Sizes",
      component: <ButtonSizes />,
      code: ButtonSizesCode,
    },
  ],
  card: [
    {
      name: "default",
      title: "Default",
      component: <CardDemo />,
      code: CardDemoCode,
    },
  ],
  combobox: [
    {
      name: "default",
      title: "Default",
      component: <ComboboxDemo />,
      code: ComboboxDemoCode,
    },
  ],
  "dropdown-menu": [
    {
      name: "default",
      title: "Default",
      component: <DropdownMenuDemo />,
      code: DropdownMenuDemoCode,
    },
  ],
  field: [
    {
      name: "default",
      title: "Default",
      component: <FieldDemo />,
      code: FieldDemoCode,
    },
  ],
  input: [
    {
      name: "default",
      title: "Default",
      component: <InputDemo />,
      code: InputDemoCode,
    },
  ],
  "input-group": [
    {
      name: "default",
      title: "Default",
      component: <InputGroupDemo />,
      code: InputGroupDemoCode,
    },
  ],
  label: [
    {
      name: "default",
      title: "Default",
      component: <LabelDemo />,
      code: LabelDemoCode,
    },
  ],
  select: [
    {
      name: "default",
      title: "Default",
      component: <SelectDemo />,
      code: SelectDemoCode,
    },
  ],
  separator: [
    {
      name: "default",
      title: "Default",
      component: <SeparatorDemo />,
      code: SeparatorDemoCode,
    },
  ],
  textarea: [
    {
      name: "default",
      title: "Default",
      component: <TextareaDemo />,
      code: TextareaDemoCode,
    },
  ],
  checkbox: [
    {
      name: "default",
      title: "Default",
      component: <CheckboxDemo />,
      code: CheckboxDemoCode,
    },
    {
      name: "disabled",
      title: "Disabled",
      component: <CheckboxDisabled />,
      code: CheckboxDisabledCode,
    },
  ],
  switch: [
    {
      name: "default",
      title: "Default",
      component: <SwitchDemo />,
      code: SwitchDemoCode,
    },
    {
      name: "small",
      title: "Small Size",
      component: <SwitchSmall />,
      code: SwitchSmallCode,
    },
  ],
  slider: [
    {
      name: "default",
      title: "Default",
      component: <SliderDemo />,
      code: SliderDemoCode,
    },
    {
      name: "range",
      title: "Range",
      component: <SliderRange />,
      code: SliderRangeCode,
    },
  ],
  "radio-group": [
    {
      name: "default",
      title: "Default",
      component: <RadioGroupDemo />,
      code: RadioGroupDemoCode,
    },
  ],
  popover: [
    {
      name: "default",
      title: "Default",
      component: <PopoverDemo />,
      code: PopoverDemoCode,
    },
  ],
  dialog: [
    {
      name: "default",
      title: "Default",
      component: <DialogDemo />,
      code: DialogDemoCode,
    },
  ],
  command: [
    {
      name: "default",
      title: "Default",
      component: <CommandDemo />,
      code: CommandDemoCode,
    },
  ],
  "datefield-rac": [
    {
      name: "default",
      title: "Default",
      component: <DateFieldDemo />,
      code: DateFieldDemoCode,
    },
    {
      name: "default-value",
      title: "Default Value",
      component: <DateFieldDefaultValueDemo />,
      code: DateFieldDefaultValueDemoCode,
    },
  ],
  "password-input": [
    {
      name: "default",
      title: "Default",
      component: <PasswordInputDemo />,
      code: PasswordInputDemoCode,
    },
  ],
  "file-upload": [
    {
      name: "default",
      title: "Default",
      component: <FileUploadDemo />,
      code: FileUploadDemoCode,
    },
  ],
  "multi-select": [
    {
      name: "default",
      title: "Default",
      component: <MultiSelectDemo />,
      code: MultiSelectDemoCode,
    },
    {
      name: "grouped",
      title: "Grouped",
      component: <MultiSelectGroupedDemo />,
      code: MultiSelectGroupedDemoCode,
    },
  ],
  tabs: [
    {
      name: "default",
      title: "Default",
      component: <TabsDemo />,
      code: TabsDemoCode,
    },
    {
      name: "line-variant",
      title: "Line Variant",
      component: <TabsLineVariant />,
      code: TabsLineVariantCode,
    },
  ],
  "rhf-inputs": [
    {
      name: "default",
      title: "Overview",
      component: <RhfInputsDemo />,
      code: RhfInputsDemoCode,
    },
  ],
  "rhf-input-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfInputFieldDemo />,
      code: RhfInputFieldDemoCode,
    },
  ],
  "rhf-checkbox-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfCheckboxFieldDemo />,
      code: RhfCheckboxFieldDemoCode,
    },
  ],
  "rhf-select-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfSelectFieldDemo />,
      code: RhfSelectFieldDemoCode,
    },
  ],
  "rhf-textarea-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfTextareaFieldDemo />,
      code: RhfTextareaFieldDemoCode,
    },
  ],
  "rhf-radio-group-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfRadioGroupFieldDemo />,
      code: RhfRadioGroupFieldDemoCode,
    },
  ],
  "rhf-slider-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfSliderFieldDemo />,
      code: RhfSliderFieldDemoCode,
    },
  ],
  "rhf-switch-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfSwitchFieldDemo />,
      code: RhfSwitchFieldDemoCode,
    },
  ],
  "rhf-password-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfPasswordFieldDemo />,
      code: RhfPasswordFieldDemoCode,
    },
  ],
  "rhf-input-with-tag-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfInputWithTagFieldDemo />,
      code: RhfInputWithTagFieldDemoCode,
    },
  ],
  "rhf-multi-select-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfMultiSelectFieldDemo />,
      code: RhfMultiSelectFieldDemoCode,
    },
  ],
  "rhf-file-upload-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfFileUploadFieldDemo />,
      code: RhfFileUploadFieldDemoCode,
    },
  ],
  "rhf-input-date-field": [
    {
      name: "empty",
      title: "Empty",
      component: <RhfInputDateFieldEmptyDemo />,
      code: RhfInputDateFieldEmptyDemoCode,
    },
    {
      name: "default-values",
      title: "Default Values",
      component: <RhfInputDateFieldDefaultDemo />,
      code: RhfInputDateFieldDefaultDemoCode,
    },
  ],
  "rhf-date-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfDatePickerFieldDemo />,
      code: RhfDatePickerFieldDemoCode,
    },
    {
      name: "default-values",
      title: "Default Values",
      component: <RhfDatePickerFieldDefaultValuesDemo />,
      code: RhfDatePickerFieldDefaultValuesDemoCode,
    },
    {
      name: "custom-format",
      title: "Custom Format",
      component: <RhfDatePickerFieldFormatDemo />,
      code: RhfDatePickerFieldFormatDemoCode,
    },
  ],
  "rhf-date-time-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfDateTimePickerFieldDemo />,
      code: RhfDateTimePickerFieldDemoCode,
    },
  ],
  "rhf-range-date-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfRangeDatePickerFieldDemo />,
      code: RhfRangeDatePickerFieldDemoCode,
    },
    {
      name: "default-values",
      title: "Default Values",
      component: <RhfRangeDatePickerFieldDefaultValuesDemo />,
      code: RhfRangeDatePickerFieldDefaultValuesDemoCode,
    },
  ],
  "rhf-time-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfTimePickerFieldDemo />,
      code: RhfTimePickerFieldDemoCode,
    },
  ],
  "rhf-base-controller": [
    {
      name: "default",
      title: "Usage",
      component: <RhfInputFieldDemo />,
      code: RhfInputFieldDemoCode,
    },
  ],
  // New Base Components
  "number-input": [
    {
      name: "default",
      title: "Default",
      component: <NumberInputDemo />,
      code: NumberInputDemoCode,
    },
    {
      name: "decimal",
      title: "Decimal",
      component: <NumberInputDecimalDemo />,
      code: NumberInputDecimalDemoCode,
    },
  ],
  "input-otp": [
    {
      name: "default",
      title: "Default",
      component: <InputOtpDemo />,
      code: InputOtpDemoCode,
    },
  ],
  "color-picker": [
    {
      name: "default",
      title: "Default",
      component: <ColorPickerDemo />,
      code: ColorPickerDemoCode,
    },
  ],
  rating: [
    {
      name: "default",
      title: "Default",
      component: <RatingDemo />,
      code: RatingDemoCode,
    },
    {
      name: "readonly",
      title: "Read Only",
      component: <RatingReadOnly />,
      code: RatingReadOnlyCode,
    },
    {
      name: "half",
      title: "Half Star",
      component: <RatingHalf />,
      code: RatingHalfCode,
    },
  ],
  // New RHF Components
  "rhf-combobox-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfComboboxFieldDemo />,
      code: RhfComboboxFieldDemoCode,
    },
  ],
  "rhf-number-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfNumberFieldDemo />,
      code: RhfNumberFieldDemoCode,
    },
    {
      name: "decimal",
      title: "Decimal",
      component: <RhfNumberFieldDecimalDemo />,
      code: RhfNumberFieldDecimalDemoCode,
    },
  ],
  "rhf-otp-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfOtpFieldDemo />,
      code: RhfOtpFieldDemoCode,
    },
  ],
  "rhf-checkbox-group-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfCheckboxGroupFieldDemo />,
      code: RhfCheckboxGroupFieldDemoCode,
    },
  ],
  "rhf-phone-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfPhoneFieldDemo />,
      code: RhfPhoneFieldDemoCode,
    },
  ],
  "rhf-currency-field": [
    {
      name: "default",
      title: "Default (USD)",
      component: <RhfCurrencyFieldDemo />,
      code: RhfCurrencyFieldDemoCode,
    },
    {
      name: "euro",
      title: "Euro",
      component: <RhfCurrencyFieldEuroDemo />,
      code: RhfCurrencyFieldEuroDemoCode,
    },
    {
      name: "with-cents",
      title: "With Cents",
      component: <RhfCurrencyFieldCentsDemo />,
      code: RhfCurrencyFieldCentsDemoCode,
    },
  ],
  "rhf-color-picker-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfColorPickerFieldDemo />,
      code: RhfColorPickerFieldDemoCode,
    },
  ],
  "rhf-rating-field": [
    {
      name: "default",
      title: "Default",
      component: <RhfRatingFieldDemo />,
      code: RhfRatingFieldDemoCode,
    },
    {
      name: "half",
      title: "Half Star",
      component: <RhfRatingFieldHalfDemo />,
      code: RhfRatingFieldHalfDemoCode,
    },
  ],
  calendar: [
    {
      name: "default",
      title: "Default",
      component: <CalendarDemo />,
      code: CalendarDemoCode,
    },
  ],
};
