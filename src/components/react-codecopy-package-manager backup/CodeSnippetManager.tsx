"use client";
import React, { useState } from "react";
import { PackageManagerSnippet } from "./components/packageManagerSnippet/packageManagerSnippet";
import "./css/codeSnippetManager.css"; // Assuming styles are defined here
import { CodeSnippetManagerProps } from "./types/types";
import { packageManagersKeyAndCommands, tabs } from "./utils/constants";

export const CodeSnippetManager: React.FC<CodeSnippetManagerProps> = ({
  packageName = "",
  showPackageManagers = true,
  reactCode = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    showPackageManagers ? tabs.npm : tabs.React
  );
  const [copiedText, setCopiedText] = useState<string>("");

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(""), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Could not copy text: ", err);
    }
  };

  const renderPackageManagerTabs = () =>
    Object.keys(packageManagersKeyAndCommands).map((manager) => (
      <button
        key={manager}
        className={`tab-btn ${activeTab === manager ? "active" : ""}`}
        onClick={() => setActiveTab(manager)}
      >
        {manager}
      </button>
    ));

  const renderPackageManagerContent = () =>
    Object.entries(packageManagersKeyAndCommands).map(
      ([key, command]) =>
        activeTab === key && (
          <div
            key={key}
            className={`tab-content ${
              copiedText === `${command} ${packageName}` ? "copied" : ""
            }`}
          >
            <button
              onClick={() => handleCopy(`${command} ${packageName}`)}
              className="copy-btn"
            >
              Copy
            </button>
            <pre>
              <code>
                <span>
                  <PackageManagerSnippet
                    command={command}
                    packageManager={key}
                    packageName={packageName || ""}
                  />
                </span>
              </code>
            </pre>
          </div>
        )
    );

  return (
    <div className="code-snippet-manager">
      {showPackageManagers ? (
        <>
          <div className="tabs">{renderPackageManagerTabs()}</div>
          {renderPackageManagerContent()}
        </>
      ) : (
        <>
          <div className="tabs">
            <button
              className={`tab-btn ${activeTab === tabs.React ? "active" : ""}`}
              onClick={() => setActiveTab("React")}
            >
              React
            </button>
          </div>
          {activeTab === tabs.React && (
            <div className="tab-content">
              <button
                onClick={() => handleCopy(reactCode)}
                className="copy-btn"
              >
                Copy
              </button>
              <pre>
                <code>{reactCode}</code>
              </pre>
            </div>
          )}
        </>
      )}
    </div>
  );
};
