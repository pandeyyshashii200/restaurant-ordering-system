import {ToastContainer, toast}
from "react-toastify";
import axios from "axios";
import NotFound from "./pages/NotFound";
 import Footer from "./components/Footer";
import OrderSuccess from "./pages/orderSuccess";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  async function addToCart(item) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    toast.error("please login first");
    return;
  }

  try {
    await axios.post("http://localhost:5000/api/cart/add", {
      userId: user._id,
      foodId: item._id,
      quantity: 1,
    });

    const existingItem = cart.find(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem._id === item._id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    toast.success("Item added to cart 🛒");
  } catch (error) {
    console.log(error);
    toast.error("Failed to add item");
  }
}


  function increaseQuantity(name) {
    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(name) {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(name) {
    setCart(cart.filter((item) => item.name !== name));
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/menu"
          element={<Menu addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route path="/success"
        element={<OrderSuccess />} />
      <Route path="*"
      element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
  position="top-right"
  autoClose={2000}
  theme="colored"
/>
    </>
  );
}

export default App;

