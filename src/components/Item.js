import React from "react";
import React, {useState} from "react";
import items from "../data/items";

 
function Item({ name, category, addToCart, removeFromCart}) {
  const [inCart, setInCart] = useState(false);

  const itemClass = inCart ? "item in-cart" : "";
  function addAndRemoveInCart(){
    setInCart(!inCart);
    if (inCart) {
      removeFromCart(name);
    } else {
      addToCart(name);
    }
  }
  return (
    
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button className="add" onClick={addAndRemoveInCart}>
        {inCart ? "Remove from Cart":"Add to Cart"}
      </button>
    </li>
  );
}
export default Item;