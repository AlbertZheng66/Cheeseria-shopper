import { useState } from "react";

import { Cheese } from "../../../domains/Domain";

const CheeseComp = (props) => {
	
	const cheese = props.cheese || {};
    const [amount, setAmount] = useState(0);

	const changeCart = (cheese: string, newAmount: number) => {
	   setAmount(newAmount); 
	   //debugger;
       if (props.changeToCart) {
		   props.changeToCart(cheese, newAmount);
	   }
	}

	const reduce = () => {
		if (amount <= 0) {
			return;
		}
		changeCart(cheese, amount - 1);
		if (amount <= 0) {
			//TODO: Disable reduce button
		}
	}

	const increase = () => {
		changeCart(cheese, amount + 1);
	}
	
	return (
	  <div>
	    <img src={cheese.imageUrl} height="100px" width="100px"/>
		<div>Name : {cheese.name}</div>
		<div>Price : {cheese.price}</div>
		<button onClick={() => reduce()}>-</button> <strong> {amount} </strong> <button onClick={() => increase()}>+</button>
		<br />
	  </div>
	);
  
  };
  
  export default CheeseComp;