import { Oval } from "react-loader-spinner";
import { useState, useEffect } from "react";
import axios from "axios";
import FoodCard from "../components/FoodCard";

function Menu({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/food"
      );

      setFoods(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFoods = foods.filter((food) => {
    const matchSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || food.category === category;

    return matchSearch && matchCategory;
  });

  if (loading) {
    return (
      <div className="loading">
        <Oval
          height={80}
          width={80}
          color="#ff6b00"
          secondaryColor="#ffd4b3"
          visible={true}
          ariaLabel="loading"
        />
        <h2>Loading Delicious Food...</h2>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <h1>🍽️ Our Menu</h1>
      <p>Choose your favorite food</p>

      <input
        type="text"
        placeholder="Search Food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="category-buttons">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Pizza")}>Pizza</button>
        <button onClick={() => setCategory("Burger")}>Burger</button>
        <button onClick={() => setCategory("Biryani")}>Biryani</button>
      </div>

      <div className="food-list">
        {filteredFoods.map((food) => (
          <FoodCard
            key={food._id}
            id={food._id}
            image={food.image}
            name={food.name}
            price={food.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;



     
