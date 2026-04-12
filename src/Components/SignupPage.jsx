import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../CSS/Loginpage.css";
import Header from "./Header";
import toast from "react-hot-toast";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [userSignup, setUserSignup] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showMessage, setShowMessage] = useState(null);
  const [signupUsers, setSignupUsers] = useState([]);
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8001/";

  const show = () => {
    setShowMessage("show");
  };

  const unshow = () => {
    setShowMessage("unShow");
  };
  const signupBtn = { id: 5, text1: "Signup" };
  const handleAddChange = async (e) => {
    if (
      !userSignup.email ||
      !userSignup.username ||
      !userSignup.password ||
      !userSignup.confirmPassword
    ) {
      toast.error("All Credentials needed ❌");
      return;
    } else if (userSignup.password.length < 6) {
      toast.error("Password must be at least 6 characters ❌");
      return;
    } else if (userSignup.password !== userSignup.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    } else {
      const userDates = {
        email: userSignup.email,
        username: userSignup.username,
        password: userSignup.password,
      };

      try {
        const response = await axios.post(`${baseUrl}users`, userDates);
        setSignupUsers([...signupUsers, userSignup]);
        toast.success("Signup successful ✔");
        console.log(signupUsers);
        setUserSignup({
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        toast.error("Error occurred while signing up ❌");
      }
    }
  };

  useEffect(() => {
    if (signupUsers.length > 0) {
      navigate("/login");
    }
  }, [signupUsers, navigate]);
  return (
    <section className="loginPage">
      {/* <Header /> */}
      <h1>Signup Page</h1>
      <article className="loginbar">
        <div className="input">
          <input
            type="text"
            value={userSignup.email}
            onChange={(e) =>
              setUserSignup({ ...userSignup, email: e.target.value })
            }
            placeholder="Email address"
          />
        </div>
        <div className="input">
          <input
            type="text"
            value={userSignup.username}
            onChange={(e) =>
              setUserSignup({ ...userSignup, username: e.target.value })
            }
            placeholder="Username"
          />
        </div>
        <div className="input">
          <input
            type={showMessage === "show" ? "password" : "text"}
            value={userSignup.password}
            onChange={(e) =>
              setUserSignup({ ...userSignup, password: e.target.value })
            }
            placeholder="Password"
          />
          {showMessage === "show" ? (
            <FaRegEyeSlash style={{ color: "gold" }} onClick={unshow} />
          ) : (
            <FaRegEye style={{ color: "gold" }} onClick={show} />
          )}
        </div>
        <div className="input">
          <input
            type={showMessage === "show" ? "password" : "text"}
            value={userSignup.confirmPassword}
            onChange={(e) =>
              setUserSignup({ ...userSignup, confirmPassword: e.target.value })
            }
            placeholder="confirm password"
          />
          {showMessage === "show" ? (
            <FaRegEyeSlash style={{ color: "gold" }} onClick={unshow} />
          ) : (
            <FaRegEye style={{ color: "gold" }} onClick={show} />
          )}
        </div>

        <Button onClick={handleAddChange} key={signupBtn.id} item={signupBtn} />
      </article>
    </section>
  );
};

export default SignupPage;
