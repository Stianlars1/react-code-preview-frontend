import { ShuttleSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/shuttle";
import { SimpleCard } from "@stianlarsen/react-ui-kit";

export const SimpleCardDemo = () => {
  return (
    <SimpleCard
      title="This is a simple card with onClick +"
      description="You can also optionally add chevron if you like"
      icon={<ShuttleSvg mouseOnCard={false} />}
      onClick={() => window.alert("You clicked the card")}
      chevron
    />
  );
};
