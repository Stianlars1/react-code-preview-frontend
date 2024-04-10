"use client";
import { ButtonCode, ButtonDemo } from "@/docks/components/button";
import { CodePreview } from "@stianlarsen/react-code-preview";

export const UsagePageTabCodeDemo = ({ title }: { title: string }) => {
  return (
    <>
      <CodePreview
        code={ButtonCode}
        component={ButtonDemo()}
        initialTab="code"
      />
    </>
  );
};
