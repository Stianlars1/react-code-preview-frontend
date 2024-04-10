```jsx
´´´jsx
// src/UsagePageCodeOnlyDemoMD.md
import { CodePreview } from "@/code-previewwwww";
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
´´´
```
