import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProductCard = ({ name, title, mark, gender, subject, user }) => {
  return (
    <DIV>
      <h2>Host:-{user}</h2>
      <h4>Name:-{name}</h4>
      <h4>Title:-{title}</h4>
      <h6>
        {subject}:{mark}
      </h6>

      <p>Gender:{gender}</p>
      <button className="button">Edit</button>
      <button className="button">Delete</button>
    </DIV>
  );
};

export default ProductCard;

const DIV = styled.div`
  width: 60%;
  border: 1px solid grey;
  // margin: auto;
  border: 1px solid grey;
  padding: 10px;
  gap: 10px;

  img {
    width: 100%;
    heigth: 100px;
  }
  button {
    marginleft: 20px;
  }
`;
