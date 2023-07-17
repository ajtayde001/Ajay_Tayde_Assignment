import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styled from "styled-components";
const Home = () => {
  const [data, setData] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const JWTToken = localStorage.getItem("token");
    console.log(JWTToken);
    const yourConfig = {
      headers: {
        Authorization: "Bearer " + JWTToken,
      },
    };
    axios
      .get("http://localhost:4500/posts", yourConfig)

      .then((res) => {
        console.log(res.data.post);
        setData(res.data.post);
        if (res.data.post.length > 0) {
          setIsAuth(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(isAuth);
  return (
    <>
      {isAuth ? (
        <DIV>
          {data.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </DIV>
      ) : (
        <h1>Please Add Data...</h1>
      )}
    </>
  );
};

export default Home;

const DIV = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  margin: auto;
  // border : 1px solid grey;
  padding: 20px;
`;
