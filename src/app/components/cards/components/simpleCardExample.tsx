"use client";

import { Hat } from "@/features/landingPage/components/landingPageShortcuts/assets/hat";
import { ShuttleSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/shuttle";
import { SimpleCard } from "@stianlarsen/react-ui-kit";

export const SimpleCardExample = () => {
  return (
    <>
      <SimpleCard
        title="This is a simple card"
        description="A perfect card for smaller occasions"
        icon={<ShuttleSvg mouseOnCard={false} />}
        onClick={() => window.alert("You clicked the card")}
        chevron
      />
      <SimpleCard
        title="This is a simple card with onClick"
        description=""
        icon={<Hat mouseOnCard={false} />}
        onClick={() => window.alert("You clicked the card")}
      />
      <SimpleCard
        title="This is a simple card with onClick +"
        description="You can also optionally add chevron if you like"
        icon={<ShuttleSvg mouseOnCard={false} />}
        onClick={() => window.alert("You clicked the card")}
        chevron
      />
      <SimpleCard
        title="This is a simple card with href (link-card)"
        description="It can also be used with icon, same as the above ones."
        href="#"
      />
    </>
  );
};
