"use client";
import { CommandPaster } from "@stianlarsen/react-package-paster";

export const VariablesCopy = () => {
  return <CommandPaster codeLanguage="React" codeSnippet={variablesSnippet} />;
};

const variablesSnippet = `
/* ==  light mode == **/
:root {
  --radius: 0.5rem;
  --border: 240 5.9% 90%;
  --padding: 0.75rem 1.25rem;
  --line-height: 1;
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 263.4 70% 50.4%;
  --primary-foreground: 210 20% 98%;
  --default: 240 5.9% 10%;
  --default-foreground: 0 0% 98%;
  --destructive: 0 72.22% 50.59%;
  --destructive-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
}

/* ==   dark mode  == */
@media (prefers-color-scheme: dark) {
  :root {
    --border: 240 3.7% 15.9%;
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --primary: 263.4 70% 50.4%;
    --primary-foreground: 210 20% 98%;
    --default: 0 0% 98%;
    --default-foreground: 240 5.9% 10%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
  }
}
`;
