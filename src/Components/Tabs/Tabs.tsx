import { Tab } from "./Tab";
import { TabName } from "./types";
import "./tabs.scss";

const tabsName: TabName[] = ["pomodoro", "short break", "long break"];

export const Tabs = () => {
  return (
    <div className="tabs-container">
      {tabsName.map((tabName) => (
        <Tab key={tabName} name={tabName} />
      ))}
    </div>
  );
};
