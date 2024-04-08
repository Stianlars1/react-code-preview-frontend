import { getHighlighter } from "shiki";
import dark from "./themes/dark.json";

export async function highlightCode(code: string) {
  const highlighter = await getHighlighter({
    langs: ["typescript"],
    themes: [],
  });

  await highlighter.loadTheme(dark as any);

  const html = highlighter.codeToHtml(code, {
    lang: "typescript",
    theme: "lambda-studio-blackout",
  });

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
