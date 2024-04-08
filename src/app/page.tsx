import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { LandingPage } from "@/features/landingPage/landingPage";
import { totalDownloads } from "./actions";
export default async function Home() {
  return (
    <GridMain>
      <LandingPage />
    </GridMain>
  );
}
