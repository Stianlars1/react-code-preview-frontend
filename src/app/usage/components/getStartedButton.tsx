"use client";
import { CommandPaster } from "@stianlarsen/react-package-paster";
export const GetstartedButton = () => {
  return <CommandPaster codeLanguage="React" codeSnippet={snippet} />;
};

const snippet = `
import { Button } from "@stianlarsen/react-ui-kit";

function App() {
  return <Button variant="primary">Click Me</Button>;
}
`;
