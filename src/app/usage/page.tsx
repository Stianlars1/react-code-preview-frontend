import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import { Metadata } from "next";
import "./css/usagePage.css";
import { UsagePageCodeOnlyDemo } from "./features/usagePageCodeOnlyDemo/usagePageCodeOnlyDemo";
import { UsagePagePropsSection } from "./features/usagePagePropsSection";
import { UsagePageTabCodeDemo } from "./features/usagePageTabCodeDemo";
import { UsagePageTabPreviewDemo } from "./features/usagePageTabPreviewDemo";
import { UsagePageTabsNavigationDemo } from "./features/usagePageTabsNavigationDemo";

export const metadata: Metadata = {
  title: "React Code Preview - Interactive Code and Component Usage Guide",
  description:
    "Learn how to effectively utilize React Code Preview for displaying interactive code examples and live component demos. Perfect for developers and educators in need of a comprehensive code showcasing tool.",
};

export default function UsagePage() {
  return (
    <GridMain>
      <GridMainHeader
        title="Usage Guide"
        subtitle="Interactive demonstration and code snippet display made simple"
      />

      <div className="usage">
        <p className="usage__description">
          Choose to display your code with an interactive live preview or as a
          standalone code block.
        </p>
        <div className="usage__options">
          <section className="usage__section">
            <UsagePageTabsNavigationDemo />

            <div className="usage__example">
              <h3 className="usage__example-title">Preview Tab</h3>
              <p className="usage__example-description">
                The Preview tab renders a live component to demonstrate the
                functionality of the code provided.
              </p>
              <div className="usage__code-block">
                <UsagePageTabPreviewDemo />
                {/* <!-- Image placeholder for Preview Tab live component rendering --> */}
              </div>

              <h3 className="usage__example-title">Code Tab</h3>
              <p className="usage__example-description">
                The Code tab presents the raw code, beautifully highlighted,
                ready for other developers to review or copy.
              </p>
              <div className="usage__code-block">
                <UsagePageTabCodeDemo title="hellooooworld" />
              </div>
            </div>
          </section>

          <section className="usage__section">
            <h2 className="usage__section-title">Standalone Code Block</h2>
            <p className="usage__section-description">
              Opt for a minimalist code block without tabs when the live preview
              is not needed.
            </p>
            <div className="usage__code-block">
              <UsagePageCodeOnlyDemo />
            </div>
          </section>

          <section className="usage__section">
            <h2 className="usage__section-title">Copy Functionality</h2>
            <p className="usage__section-description">
              A convenient copy button is included to quickly grab the code
              snippets for your projects.
            </p>
          </section>

          <UsagePagePropsSection />
        </div>
      </div>

      {/* <CodePreview component={ButtonDemo} code={ButtonCode} /> */}
    </GridMain>
  );
}
