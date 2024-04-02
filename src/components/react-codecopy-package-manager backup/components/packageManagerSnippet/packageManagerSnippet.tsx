import { PackageManagerSnippetProps } from "../../types/types";
import "./css/packageManagerSnippet.css";

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
