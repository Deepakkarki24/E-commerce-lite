import React from "react";
import productList from "../data/products";
import { FaStar } from "react-icons/fa";
import Modal from "./Modal";

const ProductCard = ({
  modalPrdDet,
  setModalPrdDet,
  modalState,
  setModalState,
  cartList,
  setCartList,
  addToCart,
  cartState,
  setCartState,
}) => {
  function handleModal(item) {
    setModalPrdDet({
      title: item.title,
      price: item.price,
      desc: item.description,
      image: item.image,
      quantity: 1,
    });
    setModalState(true);
    if (cartState) {
      setCartState(false);
    }
  }
  return (
    <div className="prodContainer">
      {productList.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => handleModal(item)}
            className="prodCard"
          >
            <div className="prodInner">
              <div className="prodImg">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="prodDet">
                <div className="prodDet1">
                  <div className="prodTitle">
                    <h5>{item.title.slice(0, 20)}...</h5>
                  </div>
                </div>
                <div className="prodDet2">
                  <span className="price">$ {item.price}</span>
                  <span className="rating">
                    <FaStar />
                    {item.rating.rate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Modal
        modalPrdDet={modalPrdDet}
        modalState={modalState}
        setModalState={setModalState}
        cartList={cartList}
        setCartList={setCartList}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ProductCard;
