import React from "react";
import "../src/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

const App = () => {
  return (
    <main>
      <section className="wrapper">
        <Header />
        <Body />
      </section>
    </main>
  );
};

export default App;
