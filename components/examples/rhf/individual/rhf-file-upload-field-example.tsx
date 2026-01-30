"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FileUploadField } from "@/components/ui/rhf-inputs";

const fileUploadSchema = z.object({
  resume: z.instanceof(File).optional(),
});

type FileUploadFormValues = z.infer<typeof fileUploadSchema>;

export function RhfFileUploadFieldDemo() {
  const { control, handleSubmit } = useForm<FileUploadFormValues>({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: { resume: undefined },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-sm"
    >
      <FileUploadField
        control={control}
        name="resume"
        label="Resume"
        description="Upload your resume (PDF, DOC, DOCX)"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export const RhfFileUploadFieldDemoCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FileUploadField } from "@/components/ui/rhf-inputs";

const schema = z.object({
  resume: z.instanceof(File).optional(),
});

type FormValues = z.infer<typeof schema>;

export function Demo() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { resume: undefined },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FileUploadField
        control={control}
        name="resume"
        label="Resume"
        description="Upload your resume (PDF, DOC, DOCX)"
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}`;
