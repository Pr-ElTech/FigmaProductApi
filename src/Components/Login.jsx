import React, { useEffect } from "react";
import Button from "./Button";
import "../CSS/Loginpage.css";
import Header from "./Header";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const baseUrl = "http://localhost:8001/";
  const loginBtn = { id: 4, text1: "Login" };
  const [Users, setUsers] = useState([]);
  const [loginUsersData, setLoginUsersData] = useState([]);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const users = async () => {
      try {
        const res = await axios.get(baseUrl + "users");
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    users();
  }, []);

  const handleAddLoginData = async (e) => {
    if (!loginData.email || !loginData.password) {
      toast.error("All Credentials needed ❌");
      return;
    } else if (loginData.password.length < 6) {
      toast.error("Password must be at least 6 characters ❌");
      return;
    }
    const registeredUser = Users.find((i) => i.email === loginData.email);
    if (!registeredUser) {
      toast.error("User not found ❌");
      return;
    }
    if (registeredUser.password !== loginData.password) {
      toast.error("Incorrect password ❌");
      return;
    } else {
      const userDatas = {
        email: loginData.email,
        password: loginData.password,
      };
      try {
        const res = await axios.post(`${baseUrl}users`, userDatas);
        setLoginUsersData(res.user);
        navigate("/products");
        return;
      } catch (error) {
        console.log(error);
      }
    }
  };

  // useEffect(() => {
  //   if (loginUsersData.length > 0) {
  //     navigator("/products");
  //   }
  // }, [loginUsersData]);
  // useEffect(() => {
  //   signupUsers.length > 0 && console.log(signupUsers);
  //   console.log(signupUsers);
  // }, []);
  return (
    <section className="loginPage">
      <h1>Login Page</h1>
      <article className="loginbar">
        <div className="input">
          <input
            type="text"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            placeholder="Email address / username"
          />
        </div>
        <div className="input">
          <input
            type={!showPassword ? "password" : "text"}
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            placeholder="Password"
          />
          {!showPassword ? (
            <FaRegEye
              style={{ color: "gold" }}
              onClick={() => setShowPassword(true)}
            />
          ) : (
            <FaRegEyeSlash
              style={{ color: "gold" }}
              onClick={() => setShowPassword(false)}
            />
          )}
        </div>
        <Button
          onClick={handleAddLoginData}
          key={loginBtn.id}
          item={loginBtn}
        />
      </article>
    </section>
  );
};

export default Login;
