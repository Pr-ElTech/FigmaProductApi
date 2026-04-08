import React from "react";
import Button from "./Button";
import "../CSS/Loginpage.css";
import Header from "./Header";

const SignupPage = () => {
  const signupBtn = { id: 5, text1: "Signup" };
  return (
    <section className="loginPage">
      <Header />
      <h1>Signup Page</h1>
      <article className="loginbar">
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="confirm password" />
        <Button key={signupBtn.id} item={signupBtn} />
      </article>
    </section>
  );
};

export default SignupPage;
