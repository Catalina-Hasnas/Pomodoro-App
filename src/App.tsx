import { Header } from "./Components/Header";
import { Settings } from "./Components/Settings/Settings";
import { Tabs } from "./Components/Tabs";
import "./App.scss";
import { appAccentColor } from "./recoil/atoms/appAccentColor";
import { useRecoilValue } from "recoil";
import { appFont } from "./recoil/atoms/appFont";
import { Timer } from "@catalinahasnas/react-timer-component";
import { AccentColor } from "./Components/Settings/types";
import { activeTabSecondsSelector } from "./recoil/selectors/activeTabTime";

const accentColorCode: Record<AccentColor, string> = {
  coral: "#f87070",
  cyan: "#70f3f8",
  lilac: "#d881f8",
};

const App = () => {
  const accentColor = useRecoilValue(appAccentColor);
  const font = useRecoilValue(appFont);
  const activeTabSeconds = useRecoilValue(activeTabSecondsSelector);

  return (
    <div
      className={`app-container font-family-${font} accent-color-${accentColor}`}
    >
      <Header />
      <main>
        <Tabs />
        <Timer
          accentColor={accentColorCode[accentColor]}
          seconds={activeTabSeconds}
          timerStyles={{
            background: "linear-gradient(315deg, #2e325a 0%, #0e112a 100%)",
            "box-shadow":
              "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272c5a",
            margin: "auto",
          }}
          width="clamp(18.75rem, 50vw, 25.625rem)"
        />
        <Settings />
      </main>
    </div>
  );
};

export default App;
