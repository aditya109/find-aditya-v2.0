import { About } from "./components/about/about";
import { Intro } from "./components/intro/intro";
import { Featured } from "./components/featured/featured";
import { ProductList } from "./components/productList/productList";
import { Contact } from "./components/contact/contact";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Featured />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
