export const UsageSnippetPackageManager = `import { CodeSnippetManager } from "@stianlarsen/react-codecopy-package-manager";

export const App = () => {
  return (
      <CodeSnippetManager
        packageName="@stianlarsen/react-ui-kit/ui-components/ui-components/ui-components/ui-components"
      />
  );
};
`;
export const UsageSnippetCodeUsage = `import { CodeSnippetManager } from "@stianlarsen/react-codecopy-package-manager";

export const App = () => {
  return (
      <CodeSnippetManager
        codeLanguage="React"
        codeSnippet='import React from "react"'
      />
  );
};
`;
