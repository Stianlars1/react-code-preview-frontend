"use client";
import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainContent } from "@/components/grid/grid-components/gridMainContent/gridMainContent";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import { LoaderCode, LoaderDemo } from "@/docks/components/loader";
import { CodePreview } from "@stianlarsen/react-code-preview";

export default function LoaderPage() {
  return (
    <GridMain>
      <GridMainHeader
        title="Loader"
        subtitle="A small collection of easy-to-use loaders"
      />

      <GridMainContent>
        <CodePreview component={LoaderDemo} code={LoaderCode} />
      </GridMainContent>
    </GridMain>
  );
}
