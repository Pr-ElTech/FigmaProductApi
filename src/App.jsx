import React from "react";
import "../src/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Hero from "../src/Components/Hero.jsx";

const App = () => {
  return (
    <main>
      <section className="wrapper">
        <Header />
        {/* <Hero /> */}
        <Body />
        {/* <Footer /> */}
      </section>
    </main>
  );
};

export default App;
