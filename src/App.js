import { About } from "./components/about/about";
import Intro from "./components/intro/intro";
import { Featured } from "./components/featured/featured";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Featured />
    </div>
  );
};

export default App;
