import { Header } from "./Components/Header";
import { Settings } from "./Components/Settings/Settings";
import { Tabs } from "./Components/Tabs";
import { Timer } from "./Components/Timer/Timer";
import "./App.scss";
import { appAccentColor } from "./recoil/atoms/appAccentColor";
import { useRecoilValue } from "recoil";
import { appFont } from "./recoil/atoms/appFont";
import { useEffect } from "react";

const App = () => {
  const accentColor = useRecoilValue(appAccentColor);
  const font = useRecoilValue(appFont);

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);

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
    </div>
  );
};

export default App;
