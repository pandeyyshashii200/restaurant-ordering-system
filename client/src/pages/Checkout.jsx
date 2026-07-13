import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const placeOrder = async () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user"));

      await axios.post("http://localhost:5000/api/order/place", {
        userId: user._id,
      });

      alert("Order Placed Successfully!");

      navigate("/success");
    } catch (error) {
      alert(error.response?.data?.message || "Order Failed");
    }
  };

  return (
    <div className="checkout-container">
      <h1>💳 Checkout</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

      <br />
      <br />

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Credit / Debit Card</option>
      </select>

      <br />
      <br />

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;



