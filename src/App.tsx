import { Header } from "./Components/Header";
import { Settings } from "./Components/Settings/Settings";
import { Tabs } from "./Components/Tabs";
import { Timer } from "./Components/Timer/Timer";
import "./App.scss";
import { appAccentColor } from "./recoil/atoms/appAccentColor";
import { useRecoilValue } from "recoil";
import { appFont } from "./recoil/atoms/appFont";

const App = () => {
  const accentColor = useRecoilValue(appAccentColor);
  const font = useRecoilValue(appFont);

  return (
    <div
      className={`app-container font-family-${font} accent-color-${accentColor}`}
    >
      <Header />
      <main>
        <Tabs />
        <Timer />
        <Settings />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
