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
