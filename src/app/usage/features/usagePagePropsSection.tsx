import { shikiThemesUrl } from "@/utils/constants";
import Link from "next/link";

export const UsagePagePropsSection = () => {
  return (
    <>
      <section className="usage__section">
        <h2 className="usage__section-title">Component Props</h2>
        <p className="usage__section-description">
          Understand the different props you can use with the CodePreview
          component and how they affect its functionality.
        </p>
        <table className="usage__props-table">
          <thead>
            <tr>
              <th>Prop Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>code</td>
              <td>string</td>
              <td>Yes</td>
              <td>The code snippet to be displayed or executed.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>component</td>
              <td>
                <code>
                  {
                    "(() => JSX.Element) | JSX.Element | React.ComponentType}<any>"
                  }
                </code>
              </td>
              <td>No</td>
              <td>If provided, the tabs for preview and code will be shown.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lightTheme</td>
              <td>
                <Link href={shikiThemesUrl}>Theme</Link>
              </td>
              <td>No</td>
              <td>Light theme for code syntax highlighting.</td>
              <td>blackout</td>
            </tr>
            <tr>
              <td>darkTheme</td>
              <td>
                <Link href={shikiThemesUrl}>Theme</Link>
              </td>
              <td>No</td>
              <td>Dark theme for code syntax highlighting.</td>
              <td>blackout</td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>No</td>
              <td>Additional CSS classNamees for the component wrapper.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>style</td>
              <td>CSSProperties</td>
              <td>No</td>
              <td>Inline styles for the component wrapper.</td>
              <td>-</td>
            </tr>
            <tr>
              <td>initialTab</td>
              <td>TabsType</td>
              <td>No</td>
              <td>Specifies the initial active tab.</td>
              <td>preview</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
