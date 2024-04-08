"use client";
import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainContent } from "@/components/grid/grid-components/gridMainContent/gridMainContent";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import {
  SimpleCardCode,
  SimpleCardDemo,
} from "@/docks/components/cards/simpleCard";
import { CodePreview } from "@stianlarsen/react-code-preview";
import { SimpleCardExample } from "./components/simpleCardExample";

export default function CardsPage() {
  return (
    <GridMain>
      <GridMainHeader
        title="Cards"
        subtitle="A small collection of easy-to-use cards for simple use-cases"
      />

      <SimpleCardExample />
      <GridMainContent>
        <CodePreview component={SimpleCardDemo} code={SimpleCardCode} />
      </GridMainContent>
    </GridMain>
  );
}
