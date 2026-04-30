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
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
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

