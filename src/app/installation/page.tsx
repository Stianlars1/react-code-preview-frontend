import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";

import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import { Installation } from "./components/installation/installation";
import "./css/installation.css";
export default function GetStarted() {
  return (
    <GridMain>
      <GridMainHeader
        title="Installation"
        subtitle="Follow the steps below to install the react-ui-kit, and optionally
        customize your theme"
      />
      <section className="installation-page">
        <Installation />
      </section>
    </GridMain>
  );
}
