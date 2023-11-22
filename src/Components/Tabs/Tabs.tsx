import { Tab } from "./Tab";
import { TabName } from "./types";

const tabsName: TabName[] = ["pomodoro", "short break", "long break"];

export const Tabs = () => {
  return (
    <section>
      {tabsName.map((tabName) => (
        <Tab key={tabName} name={tabName} />
      ))}
    </section>
  );
};
