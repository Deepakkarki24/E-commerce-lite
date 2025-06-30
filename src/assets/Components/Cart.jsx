import React from "react";
import { RxCross2 } from "react-icons/rx";

const Cart = ({ setCartState, cartList, setCartList }) => {
  function handleCartItem(index) {
    setCartList((prevCartList) => prevCartList.filter((_, i) => i !== index));
  }
  return (
    <div className="cart_box">
      <div className="toggleCart">
        <RxCross2 onClick={() => setCartState(false)} />
      </div>
      <div className="cardHead">
        <h3>Shopping Cart Summary</h3>
      </div>

      {cartList.length > 0 ? (
        cartList.map((item, index) => (
          <div key={index} className="prdDetBox">
            <RxCross2
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleCartItem(index);
              }}
            />
            <div className="productImg">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="prdTitle">
              <h4>{item.title}</h4>
            </div>
            <div className="prdPrice">
              <span>{item.price}</span>
            </div>
            <div className="prdQuan">{item.quantity}</div>
          </div>
        ))
      ) : (
        <div>
          <h3 className="emptyCartMsg">No items selected yet</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
