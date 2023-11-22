import { useRecoilState } from "recoil";
import { activeTabAtom } from "../../recoil/atoms/activeTab";
import { TabName } from "./types";

export const Tab = ({ name }: { name: TabName }) => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);

  return (
    <button
      onClick={() => {
        setActiveTab(name);
      }}
    >
      {name}
    </button>
  );
};
