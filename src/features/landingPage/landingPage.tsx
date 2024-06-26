import { totalDownloads } from "@/app/actions";
import { Badge } from "@/components/ui/badge/badge";
import { npmPackageUrl } from "@/utils/constants";
import { Button, Loader } from "@stianlarsen/react-ui-kit";
import { Suspense } from "react";
import { LandingPageShortCuts } from "./components/landingPageShortcuts/landingPageShortcuts";
import "./css/landingPage.css";

export const revalidate = 60;
export const LandingPage = async () => {
  const totalDownloaded = await totalDownloads();

  return (
    <Suspense fallback={<SuspenseLoader />}>
      <section className="landing-page">
        <header className="landing-page__header">
          <Badge variant="muted">Downloads {totalDownloaded}/month</Badge>
          <h1 className="landing-page__header__title">
            React <span>Code</span> Preview
          </h1>
          <p className="mini-subtitle">
            Elevate Your Documentation and Showcasing Experience
          </p>
          <p className="landing-page__header__subtitle">
            <Button
              id="landing-page-subtitle-link"
              href={npmPackageUrl}
              width={"fit-content"}
              variant="link"
              aria-label="Click to go to the npm package for react-code-preview"
            >
              @stianlarsen/react-code-preview
            </Button>{" "}
            is a React component designed for developers, by developers. This
            versatile component allows you to seamlessly integrate both code
            previews and live component examples in your documentation or
            project showcases. Whether you&apos;re looking to highlight the
            elegance of your UI components or provide clear, tangible examples
            of your coding prowess, @stianlarsen/react-code-preview offers a
            solution.
          </p>
        </header>

        <LandingPageShortCuts />
      </section>
    </Suspense>
  );
};

export const SuspenseLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        backgroundColor: "hsl(var(--background))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader />
    </div>
  );
};
