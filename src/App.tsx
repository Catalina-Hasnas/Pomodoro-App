import { Header } from "./Components/Header";
import { Settings } from "./Components/Settings/Settings";
import { Tabs } from "./Components/Tabs";
import { Timer } from "./Components/Timer/Timer";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
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
