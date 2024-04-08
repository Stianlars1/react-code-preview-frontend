import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import Link from "next/link";
import { GetstartedButton } from "./components/getStartedButton";
import "./css/getStarted.css";

export default function GetStarted() {
  return (
    <GridMain>
      <GridMainHeader
        title="Get started (usage)"
        subtitle="Follow the steps below to take advantage of the UI kit."
      />
      <section className="get-started-page">
        <div className="get-started-page__content">
          <p>
            Use the{" "}
            <Link
              style={{ textDecoration: "underline" }}
              href={"/components/button"}
            >
              Button
            </Link>
          </p>

          <GetstartedButton />
        </div>
      </section>
    </GridMain>
  );
}
