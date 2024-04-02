import { PackageManagerSnippetProps } from "../../types/types";

export const PackageManagerSnippet: React.FC<PackageManagerSnippetProps> = ({
  command,
  packageManager,
  packageName,
}) => {
  return (
    <div className="package-manager-code-snippet-container">
      <span className="package-manager">{packageManager} </span>

      <span className="package-command">
        {command} {packageName}
      </span>
    </div>
  );
};
