import { totalDownloads } from "@/app/actions";
import { Badge } from "@/components/ui/badge/badge";
import { Suspense } from "react";
import { LandingPageShortCuts } from "./components/landingPageShortcuts/landingPageShortcuts";
import "./css/landingPage.css";
export const LandingPage = async () => {
  const totalDownloaded = await totalDownloads();

  return (
    <Suspense fallback="Loading">
      <section className="landing-page">
        <header className="landing-page__header">
          <Badge variant="primary">Downloads {totalDownloaded}/month</Badge>
          <h1 className="landing-page__header__title">React UI kit</h1>
          <p className="mini-subtitle">
            Essential Building Blocks for Your Projects
          </p>
          <p className="landing-page__header__subtitle">
            A versatile React UI kit focused on delivering ready-to-use,
            customizable buttons for every use case. Designed to save developers
            time and streamline UI development, this kit offers a range of
            button styles and loaders, ensuring immediate integration and
            thematic coherence across projects
          </p>

          <Badge variant="outlined">Components under development</Badge>

          {/* <p className="landing-page__header__subtitle">
            This is the website for the npm package react-ui-kit. It is a
            collection of components for building React applications.
          </p> */}
        </header>

        <LandingPageShortCuts />
      </section>
    </Suspense>
  );
};
