const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeCart,
} = require("../controllers/cartController");

router.post("/add", addToCart);
router.get("/", getCart);
router.delete("/:id", removeCart);

module.exports = router;