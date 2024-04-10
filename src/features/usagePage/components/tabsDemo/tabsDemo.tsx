import { useLayoutEffect, useRef, useState } from "react";
import "./css/tabsDemo.css";

type TabsType = "preview" | "code";

export const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState<TabsType>("preview");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState({
    left: activeTab === "preview" ? "0" : "86px",
    width: activeTab === "preview" ? "82px" : "65px",
  });

  const updateActiveTab = (tabIndex: number, newTab: TabsType) => {
    setActiveTab(newTab);
    const tabElement = tabsRef.current[tabIndex];
    if (tabElement) {
      const { offsetLeft, clientWidth } = tabElement;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`,
      });
    }
  };

  useLayoutEffect(() => {
    const activeIndex = tabsRef.current.findIndex(
      (tab) => tab?.textContent?.toLowerCase() === activeTab
    );

    if (activeIndex !== -1 && tabsRef.current[activeIndex]) {
      const { offsetLeft, clientWidth } = tabsRef.current[activeIndex]!;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${clientWidth}px`,
      });
    }
  }, [activeTab]);

  return (
    <div className="usage-page-preview ">
      <div className="usage-page-preview__tabs">
        {(["preview", "code"] as TabsType[]).map((tabName, index) => (
          <button
            key={tabName}
            className={`usage-page-preview__tabs__trigger ${
              activeTab === tabName
                ? "usage-page-preview__tabs__trigger-active"
                : ""
            }`}
            ref={(el) => {
              tabsRef.current[index] = el;
            }}
            onClick={() => updateActiveTab(index, tabName)}
          >
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
          </button>
        ))}
        <div
          className={"usage-page-preview__tabs__underline"}
          style={underlineStyle}
        />
      </div>
    </div>
  );
};
