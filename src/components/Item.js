import React,{useState} from "react";



function Item({ name, category }) {
  const [inCart,setInCart] = useState(false)
  const itemClass =inCart?  "in-cart" : ""
  
  const changeClass = inCart ? "remove" : "add"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick ={()=>{setInCart(!inCart)}} className={changeClass}>{inCart ? "Remove From Cart": "Add to Cart"} </button>
    </li>
  );
}

export default Item;
