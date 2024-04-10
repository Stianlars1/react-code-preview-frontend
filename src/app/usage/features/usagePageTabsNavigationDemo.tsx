import { UsagePageTabsDemo } from "../components/usagePageTabsDemo";

export const UsagePageTabsNavigationDemo = () => {
  return (
    <>
      <h2 className="usage__section-title">Tabs Navigation</h2>
      <p className="usage__section-description">
        Use the tabs to navigate between the live preview of your component and
        the code snippet that created it.
      </p>

      <UsagePageTabsDemo />
    </>
  );
};
