// import React, { useContext, useState, useEffect } from "react";
// import { StoreContext } from "../../context/Context";
// import "./Cart.css";
// import { useNavigate } from "react-router";

// const Cart = () => {
//   const { food_list, cartItems, addTocart, removeFromCart } = useContext(StoreContext);
//   const [promoCode, setPromoCode] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const navigate = useNavigate();

//   // calculate subtotal
//   const subtotal = Object.entries(cartItems).reduce((acc, [id, qty]) => {
//     const item = food_list.find((f) => f._id === id);
//     return acc + (item ? item.price * qty : 0);
//   }, 0);

//   // apply promo
//   const applyPromo = () => {
//     if (promoCode === "FOOD10") {
//       setDiscount(subtotal * 0.1);
//     } else {
//       setDiscount(0);
//       alert("Invalid promo code");
//     }
//   };

//   const total = subtotal - discount;

//    // 🚀 Auto redirect to home if cart empty
//    useEffect(() => {
//     if (Object.keys(cartItems).length === 0) {
//       const timer = setTimeout(() => {
//         navigate('/');
//       }, 5000);

//       return () => clearTimeout(timer); // cleanup
//     }
//   }, [cartItems, navigate]);

//   return (
//     <div className="cart-container">
//       <h2>Cart</h2>
//       <div className="cart-content">
//         {/* LEFT: Cart Items */}
//         <div className="cart-items">
//           {Object.keys(cartItems).length === 0 ? (
//             <div>
//               <p className="empty">Your cart is empty</p>
//             </div>
//           ) : (
//             food_list
//               .filter((item) => cartItems[item._id])
//               .map((item) => (
//                 <div className="cart-item" key={item._id}>
//                   <img src={item.image} alt={item.name} className="cart-img" />
//                   <div className="cart-info">
//                     <h4>{item.name}</h4>
//                     <p>${item.price.toFixed(2)}</p>
//                   </div>
//                   <div className="cart-actions">
//                     <button onClick={() => removeFromCart(item._id)}>-</button>
//                     <span>{cartItems[item._id]}</span>
//                     <button onClick={() => addTocart(item._id)}>+</button>
//                   </div>
//                   <p className="cart-total">${(item.price * cartItems[item._id]).toFixed(2)}</p>
//                   {/* <button className="remove-btn" onClick={() => removeFromCart(item._id)}>✕</button> */}
//                 </div>
//               ))
//           )}
//         </div>

//         {/* RIGHT: Summary */}
//         <div className="cart-summary">
//           <div className="promo">
//             <input
//               type="text"
//               placeholder="Promo code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//             />
//             <button onClick={applyPromo}>Apply</button>
//           </div>
//           <div className="summary-details">
//             <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
//             <p>Discount: <span>-${discount.toFixed(2)}</span></p>
//             <h3>Total: <span>${total.toFixed(2)}</span></h3>
//           </div>
//           <button className="checkout-btn" onClick={()=>navigate('/order')}>Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;










// import React, { useContext, useState } from "react";
// import { StoreContext } from "../../context/Context";
// import "./Cart.css";
// import { useNavigate } from "react-router";

// const Cart = () => {
//   const { food_list, cartItems, addTocart, removeFromCart } = useContext(StoreContext);
//   const [promoCode, setPromoCode] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const navigate = useNavigate();

//   // User details
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   // Modal state
//   const [showAddressModal, setShowAddressModal] = useState(false);

//   // calculate subtotal
//   const subtotal = Object.entries(cartItems).reduce((acc, [id, qty]) => {
//     const item = food_list.find((f) => f._id === id);
//     return acc + (item ? item.price * qty : 0);
//   }, 0);

//   const total = subtotal - discount;

//   const applyPromo = () => {
//     if (promoCode === "FOOD10") {
//       setDiscount(subtotal * 0.1);
//     } else {
//       setDiscount(0);
//       alert("Invalid promo code");
//     }
//   };

//   const handleAddressSave = () => {
//     if (!userDetails.name || !userDetails.phone || !userDetails.address) {
//       alert("Please fill all fields");
//       return;
//     }
//     setShowAddressModal(false);
//   };

//   return (
//     <div className="cart-container">

//       {/* Address Section */}
//       <div className="user-info">
//         {userDetails.address ? (
//           <div className="saved-address">
//             <p><strong>Name:</strong> {userDetails.name}</p>
//             <p><strong>Phone:</strong> {userDetails.phone}</p>
//             <p><strong>Address:</strong> {userDetails.address}</p>
//             <button onClick={() => setShowAddressModal(true)}>Change Address</button>
//           </div>
//         ) : Object.keys(cartItems).length > 0 ? (
//           <button className="address-btn" onClick={() => setShowAddressModal(true)}>Add Address</button>
//           ) : null}
//       </div>
//       <h2>Cart Items</h2>

//       {/* Address Modal */}
//       {showAddressModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{userDetails.address ? "Edit Address" : "Add Address"}</h2>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={userDetails.name}
//               onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={userDetails.phone}
//               onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
//             />
//             <textarea
//               placeholder="Delivery Address"
//               value={userDetails.address}
//               onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
//             />
//             <div className="modal-buttons">
//               <button onClick={handleAddressSave}>{userDetails.address ? "Update" : "Save"}</button>
//               <button onClick={() => setShowAddressModal(false)}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="cart-content">
//         {/* LEFT: Cart Items */}
//         <div className="cart-items">
//           {Object.keys(cartItems).length === 0 ? (
//             <p className="empty">Your cart is empty</p>
//           ) : (
//             food_list
//               .filter((item) => cartItems[item._id])
//               .map((item) => (
//                 <div className="cart-item" key={item._id}>
//                   <img src={item.image} alt={item.name} className="cart-img" />
//                   <div className="cart-info">
//                     <h4>{item.name}</h4>
//                     <p>${item.price.toFixed(2)}</p>
//                   </div>
//                   <div className="cart-actions">
//                     <button onClick={() => removeFromCart(item._id)}>-</button>
//                     <span>{cartItems[item._id]}</span>
//                     <button onClick={() => addTocart(item._id)}>+</button>
//                   </div>
//                   <p className="cart-total">${(item.price * cartItems[item._id]).toFixed(2)}</p>
//                 </div>
//               ))
//           )}
//         </div>

//         {/* RIGHT: Summary */}
//         <div className="cart-summary">
//           <div className="promo">
//             <input
//               type="text"
//               placeholder="Promo code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//             />
//             <button onClick={applyPromo}>Apply</button>
//           </div>
//           <div className="summary-details">
//             <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
//             <p>Discount: <span>-${discount.toFixed(2)}</span></p>
//             <h3>Total: <span>${total.toFixed(2)}</span></h3>
//           </div>
//           <button className="checkout-btn" onClick={() => navigate('/order')}>
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;






















// import React, { useContext, useState } from "react";
// import { StoreContext } from "../../context/Context";
// import "./Cart.css";
// import { useNavigate } from "react-router";

// const Cart = () => {
//   const { food_list, cartItems, addTocart, removeFromCart } = useContext(StoreContext);
//   const [promoCode, setPromoCode] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const navigate = useNavigate();

//   // User details
//   const [userDetails, setUserDetails] = useState({
//     name: "Abhijeet Pradhan",
//     phone: "201301",
//     address: "Cavisson Systems, C-139, Sector 63, Noida Sector 63, Gautam Buddha Nagar",
//   });

//   // Modal state
//   const [showAddressModal, setShowAddressModal] = useState(false);

//   // calculate subtotal
//   const subtotal = Object.entries(cartItems).reduce((acc, [id, qty]) => {
//     const item = food_list.find((f) => f._id === id);
//     return acc + (item ? item.price * qty : 0);
//   }, 0);

//   const total = subtotal - discount;

//   const applyPromo = () => {
//     if (promoCode === "FOOD10") {
//       setDiscount(subtotal * 0.1);
//     } else {
//       setDiscount(0);
//       alert("Invalid promo code");
//     }
//   };

//   const handleAddressSave = () => {
//     if (!userDetails.name || !userDetails.phone || !userDetails.address) {
//       alert("Please fill all fields");
//       return;
//     }
//     setShowAddressModal(false);
//   };

//   return (
//     <div className="cart-container">

//       {/* Myntra-style Address Section with Your Theme Colors */}
//       <div className="delivery-address-section">
//         <div className="section-header">
//           <h2>DELIVERY ADDRESS</h2>
//         </div>
        
//         {userDetails.address ? (
//           <div className="address-container">
//             <div className="address-card selected">
//               <div className="address-card-header">
//                 <span className="address-type">Home</span>
//                 <button 
//                   className="theme-edit-btn"
//                   onClick={() => setShowAddressModal(true)}
//                 >
//                   EDIT
//                 </button>
//               </div>
//               <div className="address-details">
//                 <div className="address-user-info">
//                   <span className="user-name">{userDetails.name}</span>
//                   <span className="user-phone">{userDetails.phone}</span>
//                 </div>
//                 <div className="address-text">
//                   {userDetails.address}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : Object.keys(cartItems).length > 0 ? (
//           <div className="add-address-card" onClick={() => setShowAddressModal(true)}>
//             <div className="add-address-content">
//               <span className="add-icon">+</span>
//               <span className="add-text">ADD NEW ADDRESS</span>
//             </div>
//           </div>
//         ) : null}
//       </div>

//       <h2 className="cart-title">Cart Items</h2>

//       {/* Address Modal */}
//       {showAddressModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>{userDetails.address ? "Edit Address" : "Add Address"}</h2>
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={userDetails.name}
//               onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={userDetails.phone}
//               onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
//             />
//             <textarea
//               placeholder="Delivery Address"
//               value={userDetails.address}
//               onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
//             />
//             <div className="modal-buttons">
//               <button onClick={handleAddressSave}>{userDetails.address ? "UPDATE" : "SAVE"}</button>
//               <button onClick={() => setShowAddressModal(false)}>CANCEL</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="cart-content">
//         {/* LEFT: Cart Items */}
//         <div className="cart-items">
//           {Object.keys(cartItems).length === 0 ? (
//             <p className="empty">Your cart is empty</p>
//           ) : (
//             food_list
//               .filter((item) => cartItems[item._id])
//               .map((item) => (
//                 <div className="cart-item" key={item._id}>
//                   <img src={item.image} alt={item.name} className="cart-img" />
//                   <div className="cart-info">
//                     <h4>{item.name}</h4>
//                     <p>${item.price.toFixed(2)}</p>
//                   </div>
//                   <div className="cart-actions">
//                     <button onClick={() => removeFromCart(item._id)}>-</button>
//                     <span>{cartItems[item._id]}</span>
//                     <button onClick={() => addTocart(item._id)}>+</button>
//                   </div>
//                   <p className="cart-total">${(item.price * cartItems[item._id]).toFixed(2)}</p>
//                 </div>
//               ))
//           )}
//         </div>

//         {/* RIGHT: Summary */}
//         <div className="cart-summary">
//           <div className="promo">
//             <input
//               type="text"
//               placeholder="Promo code"
//               value={promoCode}
//               onChange={(e) => setPromoCode(e.target.value)}
//             />
//             <button onClick={applyPromo}>Apply</button>
//           </div>
//           <div className="summary-details">
//             <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
//             <p>Discount: <span>-${discount.toFixed(2)}</span></p>
//             <h3>Total: <span>${total.toFixed(2)}</span></h3>
//           </div>
//           <button 
//             className="checkout-btn" 
//             onClick={() => navigate('/order')}
//             disabled={!userDetails.address}
//           >
//             {userDetails.address ? "PROCEED TO CHECKOUT" : "ADD ADDRESS TO CONTINUE"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;





import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/Context";
import "./Cart.css";
import { useNavigate } from "react-router";

const Cart = () => {
  const { food_list, cartItems, addTocart, removeFromCart } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  // User details - start with empty values
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Modal state
  const [showAddressModal, setShowAddressModal] = useState(false);

  // calculate subtotal
  const subtotal = Object.entries(cartItems).reduce((acc, [id, qty]) => {
    const item = food_list.find((f) => f._id === id);
    return acc + (item ? item.price * qty : 0);
  }, 0);

  const total = subtotal - discount;

  const applyPromo = () => {
    if (promoCode === "FOOD10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const handleAddressSave = () => {
    if (!userDetails.name || !userDetails.phone || !userDetails.address) {
      alert("Please fill all fields");
      return;
    }
    setShowAddressModal(false);
  };

  // Check if cart has items
  const hasCartItems = Object.keys(cartItems).length > 0;

  return (
    <div className="cart-container">

      {/* Address Section - Only show if cart has items */}
      {hasCartItems && (
        <div className="delivery-address-section">
          <div className="section-header">
            <h2>DELIVERY ADDRESS</h2>
          </div>
          
          {userDetails.address ? (
            <div className="address-container">
              <div className="address-card selected">
                <div className="address-card-header">
                  <span className="address-type">Home</span>
                  <button 
                    className="theme-edit-btn"
                    onClick={() => setShowAddressModal(true)}
                  >
                    EDIT
                  </button>
                </div>
                <div className="address-details">
                  <div className="address-user-info">
                    <span className="user-name">{userDetails.name}</span>
                    <span className="user-phone">{userDetails.phone}</span>
                  </div>
                  <div className="address-text">
                    {userDetails.address}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="add-address-card" onClick={() => setShowAddressModal(true)}>
              <div className="add-address-content">
                <span className="add-icon">+</span>
                <span className="add-text">ADD DELIVERY ADDRESS</span>
              </div>
            </div>
          )}
        </div>
      )}

      <h2 className="cart-title">Cart Items</h2>

      {/* Address Modal */}
      {showAddressModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{userDetails.address ? "Edit Address" : "Add Delivery Address"}</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={userDetails.name}
              onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={userDetails.phone}
              onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
            />
            <textarea
              placeholder="Full Delivery Address"
              value={userDetails.address}
              onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
              rows={3}
            />
            <div className="modal-buttons">
              <button onClick={handleAddressSave}>{userDetails.address ? "UPDATE" : "SAVE"}</button>
              <button onClick={() => setShowAddressModal(false)}>CANCEL</button>
            </div>
          </div>
        </div>
      )}

      <div className="cart-content">
        {/* LEFT: Cart Items */}
        <div className="cart-items">
          {!hasCartItems ? (
            <p className="empty">Your cart is empty</p>
          ) : (
            food_list
              .filter((item) => cartItems[item._id])
              .map((item) => (
                <div className="cart-item" key={item._id}>
                  <img src={item.image} alt={item.name} className="cart-img" />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-actions">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span>{cartItems[item._id]}</span>
                    <button onClick={() => addTocart(item._id)}>+</button>
                  </div>
                  <p className="cart-total">${(item.price * cartItems[item._id]).toFixed(2)}</p>
                </div>
              ))
          )}
        </div>

        {/* RIGHT: Summary */}
        {hasCartItems && (
          <div className="cart-summary">
            <div className="promo">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={applyPromo}>Apply</button>
            </div>
            <div className="summary-details">
              <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
              <p>Discount: <span>-${discount.toFixed(2)}</span></p>
              <h3>Total: <span>${total.toFixed(2)}</span></h3>
            </div>
            <button 
              className="checkout-btn" 
              onClick={() => navigate('/order')}
              disabled={!userDetails.address}
            >
              {userDetails.address ? "PROCEED TO CHECKOUT" : "ADD ADDRESS TO CONTINUE"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
