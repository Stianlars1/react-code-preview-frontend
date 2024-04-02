import { FC, useState } from "react";
import { CopyIcon } from "../../assets/copyIcon";
import { PackageManagerProps } from "../../types/types";
import { packageManagersKeyAndCommands, tabs } from "../../utils/constants";
import { copyToClipboard } from "../../utils/copy";
import { PackageManagerSnippet } from "../packageManagerSnippet/packageManagerSnippet";

export const PackageManager: FC<PackageManagerProps> = ({ packageName }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs.npm);
  const [textCopied, setTextCopied] = useState<boolean>(false);

  const handleTextCopied = () => {
    setTextCopied(true);
    setTimeout(() => setTextCopied(false), 2000);
  };

  const RenderPackageManagerTabs = () =>
    Object.keys(packageManagersKeyAndCommands).map((manager) => {
      manager;
      return (
        <button
          key={manager}
          className={`tab-btn ${activeTab === manager ? "active" : ""}`}
          onClick={() => setActiveTab(manager)}
        >
          {manager}
        </button>
      );
    });

  const RenderPackageManagerContent = () =>
    Object.entries(packageManagersKeyAndCommands).map(
      ([manager, command]) =>
        activeTab === manager && (
          <div
            key={manager}
            className={`tab-content ${textCopied ? "copied" : ""}`}
          >
            <CopyIcon
              onClick={() =>
                copyToClipboard(`${manager} ${command} ${packageName}`, () =>
                  handleTextCopied()
                )
              }
              className="copy-btn"
              showSuccessIcon={textCopied}
            />
            <pre>
              <code>
                <span>
                  <PackageManagerSnippet
                    command={command}
                    packageManager={manager}
                    packageName={packageName || ""}
                  />
                </span>
              </code>
            </pre>
          </div>
        )
    );
  return (
    <>
      <div className="code-snippet-manager">
        <div className="tabs">
          <RenderPackageManagerTabs />
        </div>
        <RenderPackageManagerContent />
      </div>
    </>
  );
};
