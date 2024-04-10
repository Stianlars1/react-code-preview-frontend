import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Code Preview - Troubleshoot",
  description:
    "Find solutions to common issues you may encounter while using the React Code Preview component",
};
export default function Troubleshoot() {
  return (
    <GridMain>
      <GridMainHeader
        title="Troubleshoot"
        subtitle="This page will be updated in the future with common issues and their
        solutions."
      />
    </GridMain>
  );
}
