const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Food = require("../models/Food");

// Place Order
const placeOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    // Get user's cart
    const cartItems = await Cart.find({ userId }).populate("foodId");

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    let totalAmount = 0;

    const items = cartItems.map((item) => {
      totalAmount += item.foodId.price * item.quantity;

      return {
        foodId: item.foodId._id,
        quantity: item.quantity,
      };
    });

    const order = await Order.create({
      userId,
      items,
      totalAmount,
    });

    // Clear cart
    await Cart.deleteMany({ userId });

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("items.foodId");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};