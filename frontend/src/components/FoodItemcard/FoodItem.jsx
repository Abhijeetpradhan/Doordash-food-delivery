import React, { useState } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, image, price, description }) => {
    console.log("name==>",name);
    console.log("image",image);
    const [itemCount,setItemCount] = useState(0);  
    
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="Image not found" />
        {
          !itemCount ? <img  className="add" src={assets.add_icon_white} alt="" onClick={()=>setItemCount(prev=>prev+1)} /> : 
          <div className="food-item-counter">
            <img src={assets.remove_icon_red} alt="" onClick={()=>setItemCount(prev=>prev-1)} />
            <p>{itemCount}</p>
            <img src={assets.add_icon_green} alt="" onClick={()=>setItemCount(prev=>prev+1)} />
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
