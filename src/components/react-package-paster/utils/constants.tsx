import { PackageManagersType } from "../types/types";

export const packageManagersKeyAndCommands: PackageManagersType = {
  npm: "install",
  pnpm: "add",
  yarn: "add",
  bun: "add",
};

export enum tabs {
  React = "React",
  npm = "npm",
}

export const CodeLanguageMap = {
  Npm: "bash",
  pnpm: "bash",
  yarn: "bash",
  bun: "bash",
  Java: "Java",
  Kotlin: "Kotlin",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Python: "python",
  Ruby: "ruby",
  Go: "go",
  Rust: "rust",
  C: "c",
  Cpp: "cpp",
  Csharp: "c#",
  Swift: "swift",
  Dart: "dart",
  R: "r",
  Shell: "shell",
  Php: "php",
  Scala: "scala",
  Perl: "perl",
  React: "React",
  react: "React",
};
