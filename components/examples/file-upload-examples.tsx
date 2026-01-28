"use client";

import { FileUpload } from "@/components/ui/file-upload";
import * as React from "react";

export function FileUploadDemo() {
  const [, setFile] = React.useState<File | null>(null);
  return (
    <FileUpload
      label="Upload Document"
      description="PDF, DOC, or DOCX up to 10MB"
      onFileSelect={setFile}
    />
  );
}

export const FileUploadDemoCode = `import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";

export function FileUploadDemo() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <FileUpload
      label="Upload Document"
      description="PDF, DOC, or DOCX up to 10MB"
      onFileSelect={setFile}
    />
  );
}`;
