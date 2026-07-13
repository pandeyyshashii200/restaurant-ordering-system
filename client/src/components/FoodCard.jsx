function FoodCard({
  id,
  image,
  name,
  price,
  addToCart,
}) {

  console.log("Food Id:", id);

  function handleAddToCart() {
    addToCart({
      _id: id,
      image,
      name,
      price,
    });
  }

  return (
    <div className="food-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>
      {addToCart && (
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
      )}
    </div>
  );
}

export default FoodCard;

