import { CodeSnippetManager } from "@/components/react-package-paster/CodeSnippetManager";
import { UsageSnippetCodeUsage } from "@/components/react-package-paster/utils/usage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <CodeSnippetManager
        codeLanguage="JavaScript"
        codeSnippet={UsageSnippetCodeUsage}
      />
    </main>
  );
}
