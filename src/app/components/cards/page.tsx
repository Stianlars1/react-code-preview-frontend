"use client";
import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainContent } from "@/components/grid/grid-components/gridMainContent/gridMainContent";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import {
  SimpleCardsMultiCode,
  SimpleCardsMultiDemo,
} from "@/docks/components/cards/simpleCard";
import { CodePreview } from "@stianlarsen/react-code-preview";

export default function CardsPage() {
  return (
    <GridMain>
      <GridMainHeader
        title="Cards"
        subtitle="A small collection of easy-to-use cards for simple use-cases"
      />

      {/* <SimpleCardExample /> */}

      <GridMainContent>
        <CodePreview
          component={SimpleCardsMultiDemo}
          code={SimpleCardsMultiCode}
        />
      </GridMainContent>
    </GridMain>
  );
}
