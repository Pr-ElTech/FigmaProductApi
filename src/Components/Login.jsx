import React from "react";
import Button from "./Button";
import "../CSS/Loginpage.css";
import Header from "./Header";

const Login = () => {
  const loginBtn = { id: 4, text1: "Login" };
  return (
    <section className="loginPage">
      <Header />
      <h1>Login Page</h1>
      <article className="loginbar">
        <input type="text" placeholder="Email address / username" />
        <input type="password" placeholder="Password" />
        <Button key={loginBtn.id} item={loginBtn} />
      </article>
    </section>
  );
};

export default Login;
