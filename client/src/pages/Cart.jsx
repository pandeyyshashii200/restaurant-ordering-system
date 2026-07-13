import { Link } from "react-router-dom";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 😔</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                <div className="quantity-box">
                  <button onClick={() => decreaseQuantity(item.name)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.name)}>
                    +
                  </button>
                </div>

                <p>
                  <strong>Subtotal:</strong> ₹
                  {item.price * item.quantity}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <h2>Total: ₹{totalPrice}</h2>

          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
