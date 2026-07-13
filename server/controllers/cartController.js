const Cart = require("../models/Cart");

// Add to Cart
const addToCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    res.status(201).json({
      message: "Item added to cart",
      cart,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Cart Items
const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find()
      .populate("foodId")
      .populate("userId");

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove Cart Item
const removeCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item removed from cart",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeCart,
};
