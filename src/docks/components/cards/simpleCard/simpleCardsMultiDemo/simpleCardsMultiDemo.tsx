import { ShuttleSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/shuttle";
import { SimpleCard } from "@stianlarsen/react-ui-kit";

export const SimpleCardsMultiDemo = () => {
  return (
    <>
      <SimpleCard
        title="This is a simple card"
        description="And the width is set to fit-content"
        width="fit-content"
      />
      <SimpleCard
        title="This is a simple card with description"
        description="You can add icon + href / onClick + chevron as well"
      />
      <SimpleCard
        title="This is a simple card with description and icon"
        description="You can also optionally add chevron if you like + onClick / href"
        icon={<ShuttleSvg mouseOnCard={false} />}
      />
      <SimpleCard
        title="This is a simple card with onClick ++"
        description="You get the point by now, right? EASY PEASY!🔥"
        icon={<ShuttleSvg mouseOnCard={false} />}
        onClick={() => window.alert("You clicked the card")}
        chevron
      />
      <SimpleCard
        title="This is a simple card with width set to fit-content ++"
        icon={<ShuttleSvg mouseOnCard={false} />}
        onClick={() => window.alert("You clicked the card")}
        chevron
        width="fit-content"
      />
    </>
  );
};
