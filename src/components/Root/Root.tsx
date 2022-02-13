import React from "react";
import { useState } from 'react';

import styled from "styled-components";

import Cart from "./Cart";
import Cheeses from "./Cheeses";

import { Cheese, SelectedCheese } from "../../domains/Domain";


const Wrapper = styled.div`
  background-color: #fcfcfc;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 24px;
  width: 720px;
  box-shadow: 1px 1px 4px #d3d3d3;
  background-color: white;
  border-radius: 5px;
`;

const Heading = styled.strong.attrs({ role: "heading", level: 1 })`
  display: block;
  font-size: 36px;
  margin-bottom: 40px;
  margin-top: 20px;
`;


const Root = () => {
  const [selectedCheeses, setSelectedCheeses] = useState(new Array<SelectedCheese>());

  const changeToCart = (cheese: Cheese, amount: number) => {
    // console.log('cheese[' + JSON.stringify(cheese) + "] updated with amount:", amount);
    // debugger;
    let updated = [];
    if (amount == 0) {
      // remove cheeses
      updated = selectedCheeses.filter(c => c.cheese != cheese);
    } else {
      updated = [...selectedCheeses];
      let found = updated.find(c => c.cheese == cheese);
      // console.log('found:',  found);
      if (found) {
        updated.splice(updated.indexOf(found), 1, {...found, amount});
      } else {
        updated.push({cheese, amount});
      }
    }
    // console.log('updated:',  updated);
    setSelectedCheeses(updated);
  }

  return (
    <Wrapper>
      <Cart selectedCheeses={selectedCheeses} />
      <Content>
        <Heading>Cheeseria</Heading>
        <Cheeses changeToCart = {changeToCart} />
      </Content>
    </Wrapper>
  );
};

export default Root;
