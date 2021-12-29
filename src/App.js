import { About } from "./components/about/about";
import { Intro } from "./components/intro/intro";
import { Featured } from "./components/featured/featured";
import { ProductList } from "./components/productList/productList";
import { Contact } from "./components/contact/contact";
import { Toggle } from "./components/toggle/toggle";
import { ThemeContext } from "./data/context";
import { useContext } from "react";
// import { Alert } from "./components/alert/alert";

const App = () => {
  const themeCtx = useContext(ThemeContext);
  const darkMode = themeCtx.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#151518" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Featured />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
