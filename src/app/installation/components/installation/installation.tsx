import { VariablesCopy } from "../variablesCopy/variablesCopy";
import { SimpleCardInstallation } from "./InstallationSimpleCard";
import { InstallationStep } from "./installationStep";

export const Installation = () => {
  return (
    <div className="installation-page__install">
      <div>
        <h3>Step 1</h3>
        <InstallationStep />
      </div>

      <div>
        <h3>Step 2</h3>
        <p>
          For customizing the colors, you can copy paste the following variables
          in your root .css file and change them to your liking.
        </p>
        <VariablesCopy />
      </div>
      <div className="step-3">
        <h3>Step 3</h3>
        <p>
          You&apos;re done! 🎉 You can now start using the components in your
          project.
        </p>

        {/*  Take a look at the components   */}
        <SimpleCardInstallation />
      </div>
    </div>
  );
};
