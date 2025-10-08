import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Welcome from "./components/welcome.jsx";
import Whyus from "./components/whyus.jsx";
import FeaturedProducts from "./components/featuredProducts.jsx";
import ShopByCategories from "./components/shopByCategories.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Welcome />
      <Whyus />
      <FeaturedProducts />
      <ShopByCategories />
      <Footer/>
    </>
  );
}

export default App;
