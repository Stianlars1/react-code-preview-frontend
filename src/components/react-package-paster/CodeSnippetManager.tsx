"use client";
import React from "react";
import { CodeSnippetCodeCopy } from "./components/codeSnippetCodeCopy/codeSnippetCodeCopy";
import { PackageManager } from "./components/packageManager/packageManager";
import "./css/codeSnippetManager.css";
import { CodeSnippetManagerProps } from "./types/types";

export const CodeSnippetManager: React.FC<CodeSnippetManagerProps> = (
  props
) => {
  if ("packageName" in props) {
    return <PackageManager packageName={props.packageName} />;
  } else {
    return (
      <CodeSnippetCodeCopy
        codeLanguage={props.codeLanguage}
        codeSnippet={props.codeSnippet}
      />
    );
  }
};
