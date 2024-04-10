"use client";

import { CodePreview } from "@stianlarsen/react-code-preview";
import codeString from "./usagePageCodeOnlyDemoCode.md";
import codeStringMD from "./usagePageCodeOnlyDemoCodeMD.md";
export const UsagePageCodeOnlyDemo = () => {
  return (
    <>
      <CodePreview
        code={codeString}
        darkTheme="github-dark-default"
        lightTheme="github-light-default"
      />
      <CodePreview code={codeStringMD} darkTheme="vesper" />
    </>
  );
};
