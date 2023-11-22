import { Header } from "./Components/Header";
import { Tabs } from "./Components/Tabs";
import { Timer } from "./Components/Timer/Timer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Tabs />
        <Timer />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
