"use client";
import { ButtonCode, ButtonDemo } from "@/docks/components/button";
import { CodePreview } from "@stianlarsen/react-code-preview";

export const UsagePageTabPreviewDemo = () => {
  return (
    <>
      <CodePreview code={ButtonCode} component={<ButtonDemo />} />
    </>
  );
};
