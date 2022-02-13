import { useState, useEffect } from "react";
import styled from "styled-components";

import { SelectedCheese } from "../../../domains/Domain";

const Wrapper = styled.div`
  background-color: #e7e7e7;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 24px 48px;
  box-shadow: 1px 1px 1px #b8b8b8;
  margin-bottom: 48px;
`;

const Cart = (props) => {
  const [total, setTotal] = useState(0);
  let selectedCheeses = props.selectedCheeses || new Array<SelectedCheese>();

  useEffect(() => {
    // Calculate total price
    let sum = selectedCheeses
      .map((sc) => sc.amount * sc.cheese.price)
      .reduce((partialSum, a) => partialSum + a, 0)
      .toFixed(2);
    setTotal(sum);
  }, [props]);

  return (
    <Wrapper>
      <ul>
        {selectedCheeses.map((sc) => (
          <li key={sc.cheese.uuid}>
            {sc.cheese.name} x {sc.amount} (KG)
          </li>
        ))}
      </ul>
      <strong>Total: {total}</strong>
    </Wrapper>
  );
};

export default Cart;
