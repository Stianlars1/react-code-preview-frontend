import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";

import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import { npmPackageUrl } from "@/utils/constants";
import { Metadata } from "next";
import Link from "next/link";
import { Installation } from "./components/installation/installation";
import "./css/installation.css";

export const metadata: Metadata = {
  title: "React Code Preview - Installation",
  description: "Learn how to install the React Code Preview component.",
};
export default function GetStarted() {
  return (
    <GridMain>
      <GridMainHeader
        title="Installation"
        subtitle={
          <span>
            Follow the steps below to install{" "}
            {
              <Link
                aria-label="Click to go to the npm package for react-code-preview"
                href={npmPackageUrl}
              >
                react-code-preview
              </Link>
            }
            , and optionally customize your theme
          </span>
        }
      />
      <section className="installation-page">
        <Installation />
      </section>
    </GridMain>
  );
}
