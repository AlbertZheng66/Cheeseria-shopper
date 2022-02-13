import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import CheeseComp from "./Cheese";

import { Cheese } from "../../../domains/Domain";

const Wrapper = styled.div`
  background-color: #e7e7e7;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 24px 48px;
  box-shadow: 1px 1px 1px #b8b8b8;
  margin-bottom: 48px;
`;

const Cheeses = (props) => {
  const [cheeses, setCheeses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/popular/0/3")
      .then((values) => {
        setCheeses(values.data || []);
      })
      .catch((e) => {
        console.error("Caught an error when loading cheeses:" + e.message, e);
        setCheeses([]);
      });
  }, []);

  return (
    <Wrapper>
      <ul>
        {cheeses.map((cheese) => (
          <CheeseComp
            key={cheese.uuid}
            cheese={cheese}
            changeToCart={props.changeToCart}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Cheeses;
