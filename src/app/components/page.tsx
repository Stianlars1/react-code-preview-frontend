import { GridMain } from "@/components/grid/grid-components/gridMain/gridMain";
import { GridMainContentWrapper } from "@/components/grid/grid-components/gridMainContent/components/gridMainContentWrapper";
import { GridMainContent } from "@/components/grid/grid-components/gridMainContent/gridMainContent";
import { GridMainHeader } from "@/components/grid/grid-components/gridMainHeader/gridMainHeader";
import "./css/components.css";
// Essential Building Blocks for Your Projects
export default function GetStarted() {
  return (
    <GridMain>
      <GridMainHeader
        title="QuickStart UI Kit Components"
        subtitle="The QuickStart UI Kit is not just another component library. It's a
        focused toolkit aimed at developers looking to jumpstart their
        projects without the overhead of complex design decisions. We're here
        to help you get from idea to implementation faster. Try our UI Kit
        today and experience the simplicity of building beautiful interfaces
        with ease."
      />
      <GridMainContent>
        <p>
          Welcome to QuickStart UI Kit, the simplest solution for speeding up
          your project&apos;s development. Designed with simplicity and ease of
          use in mind, our UI kit provides you with the foundational components
          necessary to bring your ideas to life. Say goodbye to the hassle of
          designing basic elements from scratch.
        </p>

        <GridMainContentWrapper>
          <h3>Loader</h3>
          <p>
            Ensure your users know what&apos;s happening behind the scenes with
            our minimalistic Loader component. Perfect for indicating loading
            states or processing actions, it seamlessly integrates with any
            design.
          </p>
        </GridMainContentWrapper>

        <GridMainContentWrapper>
          <h3>Button</h3>
          <p>
            A Button is worth a thousand clicks! Our Button component is crafted
            for immediate integration, offering essential styles that cater to
            different actions and intentions. Whether it&apos;s submitting a
            form or triggering an event, our Button has you covered.
          </p>
        </GridMainContentWrapper>

        <GridMainContentWrapper>
          <h3>Card</h3>
          <p>
            Display your content elegantly with our Card component. Ideal for
            showcasing pieces of information in a clean, organized manner,
            it&apos;s the perfect starting point for creating listings,
            profiles, or product cards with minimal effort.
          </p>
        </GridMainContentWrapper>

        <GridMainContentWrapper>
          <p>
            The QuickStart UI Kit is not just another component library.
            It&apos;s a focused toolkit aimed at developers looking to jumpstart
            their projects without the overhead of complex design decisions.
            We&apos;re here to help you get from idea to implementation faster.
            Try our UI Kit today and experience the simplicity of building
            beautiful interfaces with ease.
          </p>
        </GridMainContentWrapper>
      </GridMainContent>
    </GridMain>
  );
}
