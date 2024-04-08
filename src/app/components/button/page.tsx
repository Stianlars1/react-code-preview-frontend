"use client";
import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import { ButtonDemo } from "@/docks/components/button";
import { ButtonCode } from "@/docks/components/button/index";
import { CodePreview } from "@stianlarsen/react-code-preview";
import { Button } from "@stianlarsen/react-ui-kit";
import "./css/buttonPage.css";
export default function ButtonPage() {
  return (
    <GridMain>
      <GridMainHeader
        title="Button"
        subtitle="Buttons are used to trigger an action or event"
      />

      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link" href="">
        Link
      </Button>
      {/* <Button variant="icon" href="" border={true}>
        <ShuttleSvg mouseOnCard={false} widthAndHeight={20} />
      </Button>
      <Button variant="icon" href="" border={true}>
        <StackSvg mouseOnCard={false} widthAndHeight={20} />
      </Button> */}

      <br />
      <br />
      <br />
      <br />
      <CodePreview component={ButtonDemo} code={ButtonCode} />
    </GridMain>
  );
}
