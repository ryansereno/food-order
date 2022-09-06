import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const closeCartHandler = () => {
    setCartIsOpen(false);
  };
  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  return (
    <CartProvider>
        {cartIsOpen && <Cart onCloseCart={closeCartHandler} />}
        <Header onOpenCart={openCartHandler} />
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
