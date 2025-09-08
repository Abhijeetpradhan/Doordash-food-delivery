import { StoreContext } from "./Context";
import { food_list } from "../assets/assets";
import { useState } from "react";

const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems] = useState({});

    const [category,setCategory] = useState('All');

    const addTocart = (id)=>{
        setCartItems((prev)=>(
            {
                ...prev , [id] : prev[id] ? prev[id] + 1 : 1
            }
        ))
    }

    const removeFromCart = (id)=>{
        setCartItems((prev)=>{
            if(!prev[id]){
                return prev;
            }
            const updatedCart = {...prev};
            updatedCart[id] = updatedCart[id] - 1;
            if(updatedCart[id] <=0 ){
                delete updatedCart[id];
            }
            return updatedCart;
        })
    }


    const contextValue = {food_list,cartItems,addTocart,removeFromCart,category,setCategory}
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}   

export default StoreContextProvider;