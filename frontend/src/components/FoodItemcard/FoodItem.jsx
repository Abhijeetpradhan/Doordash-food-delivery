import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Context";

const FoodItem = ({ id, name, image, price, description }) => {
    // console.log("name==>",name);
    // console.log("image",image);
    const {cartItems,addTocart,removeFromCart} = useContext(StoreContext);
    const itemCount = cartItems[id] || 0;  
    
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="Image not found" />
        {
          !itemCount ? <img  className="add" src={assets.add_icon_white} alt="" onClick={()=>addTocart(id)} /> : 
          <div className="food-item-counter">
            <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)} />
            <p>{itemCount}</p>
            <img src={assets.add_icon_green} alt="" onClick={()=>addTocart(id) } />
          </div>
        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p> 
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
