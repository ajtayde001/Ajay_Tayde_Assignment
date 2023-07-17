import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [data, setdata] = useState({
    email: "",
    pass: "",
  });
  const [isAuth, setIsAuth] = useState(false);
  const handleAdd = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://localhost:4500/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        const info = localStorage.setItem("token", res.token);
        console.log(res);
        if (res.token) {
          setIsAuth(true);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login form</h1>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => handleAdd(e)}
        />
        <br />
        <input
          type="text"
          name="pass"
          placeholder="password"
          onChange={(e) => handleAdd(e)}
        />
        <br />
        <button type="submit">Login </button>
      </form>
    </div>
  );
};

export default Login;
