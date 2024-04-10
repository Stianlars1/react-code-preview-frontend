import { SimpleCardInstallation } from "./InstallationSimpleCard";
import { InstallationStep } from "./installationStep";

export const Installation = () => {
  return (
    <div className="installation-page__install">
      <div>
        <h3 className="h3">Step 1</h3>
        <InstallationStep />
      </div>
      <div className="step-3">
        <h3 className="h3">Step 2</h3>
        <p className="p">
          You&apos;re done! 🎉 You can now start using the components in your
          project.
        </p>

        {/*  Take a look at the components   */}
        <SimpleCardInstallation />
      </div>
    </div>
  );
};
