import React from "react";
import "../src/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Hero from "../src/Components/Hero.jsx";
import Login from "./Components/Login.jsx";
import SignupPage from "./Components/SignupPage.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <section className="wrapper">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/products" element={<Body />} />
          </Routes>
        </HashRouter>
      </section>
    </main>
  );
};

export default App;
