import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark as dark,
  oneLight as light,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon } from "../../assets/copyIcon";
import { CodeSnippetCodeCopyProps } from "../../types/types";
import { copyToClipboard } from "../../utils/copy";
import { useTheme } from "../../utils/utils";

export const CodeSnippetCodeCopy: React.FC<CodeSnippetCodeCopyProps> = ({
  codeLanguage,
  codeSnippet,
}) => {
  const [textCopied, setTextCopied] = useState<boolean>(false);

  const handleTextCopied = () => {
    setTextCopied(true);
    setTimeout(() => setTextCopied(false), 2000);
  };
  const isDarkmode = useTheme().theme === "dark";

  return (
    <>
      <div className="code-snippet-manager">
        <>
          <div className="tabs">
            <button className={`tab-btn code-language-tab active`}>
              {codeLanguage}
            </button>
          </div>

          <div className="tab-content">
            <CopyIcon
              onClick={() =>
                copyToClipboard(codeSnippet, () => handleTextCopied())
              }
              className="copy-btn"
              showSuccessIcon={textCopied}
            />
            <SyntaxHighlighter
              language={"javascript"}
              style={isDarkmode ? dark : light}
              className="syntax-highlighter"
            >
              {codeSnippet}
            </SyntaxHighlighter>
          </div>
        </>
      </div>
    </>
  );
};
