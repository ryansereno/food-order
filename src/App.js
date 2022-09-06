import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const closeCartHandler = () => {
    setCartIsOpen(false);
  };
  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  return (
    <Fragment>
        {cartIsOpen && <Cart onCloseCart={closeCartHandler}/>}
      <Header onOpenCart={openCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
