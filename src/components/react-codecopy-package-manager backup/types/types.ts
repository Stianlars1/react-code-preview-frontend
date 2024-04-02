export interface PackageManagerSnippetProps {
  command: string;
  packageManager: string;
  packageName: string;
}

export interface CodeSnippetManagerProps {
  packageName?: string;
  showPackageManagers?: boolean;
  reactCode?: string;
}

export type PackageManagersType = { [key: string]: string };
