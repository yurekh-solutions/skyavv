import { useState } from "react";

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface TabPanelProps {
  tabs: TabItem[];
}

const TabPanel = ({ tabs }: TabPanelProps) => {
  const [active, setActive] = useState(tabs[0]?.value || "");

  const activeTab = tabs.find((t) => t.value === active);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              active === tab.value
                ? "vibrant-gradient text-white shadow-lg"
                : "glass-card text-gray-600 hover:text-primary hover:scale-105"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {activeTab?.content}
      </div>
    </div>
  );
};

export default TabPanel;
