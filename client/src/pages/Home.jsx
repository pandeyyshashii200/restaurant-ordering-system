import { useNavigate } from "react-router-dom";
import FoodCard from "../components/FoodCard";

import pizza from "../assets/pizza.png";
import burger from "../assets/burger.png";
import biryani from "../assets/biryani.png";

function Home(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero"
      data-aos="fade-down">
  <h1>🍽 Welcome to Shashi's Kitchen</h1>

  <p>
    Delicious Food • Fast Delivery • Best Quality
  </p>

<button onClick={() => navigate("/menu")}>
  🍽 Order Now
</button>
<div className="stats">
  <div className="stat-card">
    <h2>🍽</h2>
    <p>Fresh Menu</p>
  </div>

  <div className="stat-card">
    <h2>🚀</h2>
    <p>Fast Delivery</p>
  </div>

  <div className="stat-card">
    <h2>⭐</h2>
    <p>Premium Quality</p>
  </div>

  <div className="stat-card">
    <h2>😊</h2>
    <p>Happy Customers</p>
  </div>
</div>

  
</div>
      <h2>Our Popular Dishes</h2>

      <div className="food-list"
      data-aos="zoom-in">
        <FoodCard
          image={pizza}
          name="🍕 Pizza"
          price="299"
          
        />

        <FoodCard
          image={burger}
          name="🍔 Burger"
          price="199"
          
        />

        <FoodCard
          image={biryani}
          name="🍛 Biryani"
          price="249"
          
        />
        <div className="reviews"
        data-aos="fade-up">
  <h2>⭐ What Our Customers Say</h2>

  <div className="review-box">
    <h3>Priya ⭐⭐⭐⭐⭐</h3>
    <p>"Delicious food and super fast delivery!"</p>
  </div>

  <div className="review-box">
    <h3>Rahul ⭐⭐⭐⭐⭐</h3>
    <p>"Best pizza I've had. Highly recommended!"</p>
  </div>

  <div className="review-box">
    <h3>Anjali ⭐⭐⭐⭐⭐</h3>
    <p>"Amazing taste and beautiful packaging."</p>
  </div>
</div>
<div className="why-us"
data-aos="fade-up">
  <h2>✨ Why Choose Shashi's Kitchen?</h2>

  <div className="features">
    <div className="feature-card">
      <h3>🍽 Fresh Food</h3>
      <p>Prepared with fresh and high-quality ingredients.</p>
    </div>

    <div className="feature-card">
      <h3>🚀 Fast Delivery</h3>
      <p>Quick delivery at your doorstep.</p>
    </div>

    <div className="feature-card">
      <h3>❤️ Best Quality</h3>
      <p>Delicious taste with hygienic preparation.</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Home;