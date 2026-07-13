import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-container">
      <h1>🎉 Order Placed Successfully!</h1>

      <p>Thank you for ordering with us.</p>

      <p>Your delicious food is on the way! 🚚🍕</p>

      <Link to="/">
        <button className="home-btn">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;