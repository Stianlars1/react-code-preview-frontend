"use client";
import { Hat } from "@/features/landingPage/components/landingPageShortcuts/assets/hat";
import { SimpleCard } from "@stianlarsen/react-ui-kit";

export const SimpleCardInstallation = () => {
  return (
    <SimpleCard
      title="Guide on usage"
      description="Take a look at how to use the code preview component."
      icon={<Hat mouseOnCard={false} />}
      href="/usage"
      width="fit-content"
    />
  );
};
