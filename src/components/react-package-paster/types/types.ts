import { CodeLanguageMap } from "../utils/constants";

export interface PackageManagerSnippetProps {
  command: string;
  packageManager: string;
  packageName: string;
}

export type PackageManagersType = { [key: string]: string };

export interface PackageManagerProps {
  packageName: string;
}

export interface CodeSnippetCodeCopyProps {
  codeLanguage: keyof typeof CodeLanguageMap;
  codeSnippet: string;
}

export type CodeSnippetManagerProps =
  | CodeSnippetCodeCopyProps
  | PackageManagerProps;
