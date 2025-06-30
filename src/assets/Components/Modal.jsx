import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ modalState, modalPrdDet, setModalState, addToCart }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modalContainer">
      <div className="modalInner">
        <RxCross2
          onClick={(e) => setModalState(false)}
          className="modlaCrossBtn"
        />
        <div className="modalLeft">
          <img src={modalPrdDet.image} alt={modalPrdDet.title} />
        </div>
        <div className="modalRight">
          <div className="modalDet">
            <div className="modalTitle">
              <h5>{modalPrdDet.title}</h5>
            </div>
            <p className="modalDesc">{modalPrdDet.desc}</p>
            <div className="modalPrice">$ {modalPrdDet.price}</div>

            <button
              onClick={() => addToCart(modalPrdDet)}
              className="addToCartBtn"
            >
              <FiShoppingBag /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
