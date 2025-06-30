import React, { useEffect, useState } from "react";
import Navbar from "./assets/Components/Navbar";
import "./App.css";
import ProductCard from "./assets/Components/ProductCard";
import Cart from "./assets/Components/Cart";
import Alert from "./assets/Components/Alert";

const App = () => {
  const [modalPrdDet, setModalPrdDet] = useState(() => {
    {
      title: "";
      price: "";
      desc: "";
      image: "";
      quantity: 1;
    }
  });

  const [modalState, setModalState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [alert, setAlert] = useState(false);

  function addToCart(modalPrdDet) {
    setCartList([...cartList, modalPrdDet]);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  function handleAlert() {
    setAlert(false);
  }

  // console.log(cartList);
  return (
    <div className="App">
      <Navbar setCartState={setCartState} />
      <ProductCard
        setModalPrdDet={setModalPrdDet}
        setModalState={setModalState}
        modalPrdDet={modalPrdDet}
        modalState={modalState}
        addToCart={addToCart}
        setCartState={setCartState}
        cartState={cartState}
      />

      {cartState ? (
        <Cart
          cartList={cartList}
          setCartList={setCartList}
          setCartState={setCartState}
        />
      ) : null}

      {alert ? <Alert handleAlert={handleAlert} /> : null}
    </div>
  );
};

export default App;
