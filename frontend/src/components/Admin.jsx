import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

let initialval = {
  title: "",
  name: "",
  mark: "",
  subject: "",
  class: "",
  gender: "",
  userID: "",
  user: "",
};

export const Admin = () => {
  const [product, setProduct] = useState(initialval);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    //console.log(e)
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (product.title.trim() === "") {
      validationErrors.title = "Title is required.";
    }
    if (product.name.trim() === "") {
      validationErrors.name = "Name is required.";
    }

    // Add similar validation checks for other fields

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const JWTToken = localStorage.getItem("token");

    const yourConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JWTToken}`,
      },
    };
    axios
      .post("http://localhost:4500/posts/add", product, yourConfig)
      .then((res) => {
        setErrors("");
      })
      .catch((err) => {
        console.log(err);
      });
    setProduct(initialval);
  };

  return (
    <DIV>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={(e) => handleChange(e)}
          value={product.title}
          placeholder="Title*"
        />
        {errors.title && (
          <span style={{ color: "red", textAlign: "left", fontSize: "15px" }}>
            {errors.title}
          </span>
        )}

        <input
          name="name"
          type="text"
          onChange={(e) => handleChange(e)}
          value={product.name}
          placeholder="name*"
        />
        {errors.name && (
          <span style={{ color: "red", textAlign: "left", fontSize: "15px" }}>
            {errors.name}
          </span>
        )}
        <input
          name="mark"
          type="number"
          onChange={(e) => handleChange(e)}
          value={product.mark}
          placeholder="mark"
        />

        <input
          name="subject"
          type="text"
          onChange={(e) => handleChange(e)}
          value={product.subject}
          placeholder="subject"
        />

        <input
          name="class"
          type="text"
          onChange={(e) => handleChange(e)}
          value={product.class}
          placeholder="class"
        />
        <input
          name="gender"
          type="text"
          onChange={(e) => handleChange(e)}
          value={product.gender}
          placeholder="gender"
        />
        <input
          name="userID"
          type="text"
          onChange={(e) => handleChange(e)}
          value={product.userID}
          placeholder="userID"
        />
        <input
          name="user"
          type="text"
          onChange={(e) => handleChange(e)}
          value={product.user}
          placeholder="user"
        />

        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid grey;
  padding: 20px;
  margintop: 50px;
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  input {
    width: 80%;
    height: 40px;
    font-size: large;
  }

  select {
    width: 50%;
    height: 30px;
    font-size: large;
  }
`;
