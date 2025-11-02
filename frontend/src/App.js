
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";

// Dummy Data
const foods = [
  { id: 1, name: "Pizza", price: 249, img: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" },
  { id: 2, name: "Burger", price: 149, img: "https://cdn.pixabay.com/photo/2022/07/15/18/12/cheese-burger-7323672_1280.jpg" },
  { id: 3, name: "Biryani", price: 199, img: "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049_1280.jpg" },
  { id: 4, name: "Pasta", price: 179, img: "https://cdn.pixabay.com/photo/2016/08/15/17/11/pasta-salad-1595916_1280.jpg" }
];

// Navbar
function NavBar({ cart }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-10">
      <h1 className="font-bold text-xl">FoodZone</h1>
      <div className="flex gap-6 font-medium">
        <Link to="/">Home</Link>
        <button>Famous Food</button>
        <button>Offers</button>
        <button>Top Restaurants</button>
        <button>About Us</button>
      </div>
      <Link to="/cart" className="bg-red-500 text-white px-4 py-2 rounded">
        Cart ({cart})
      </Link>
    </div>
  );
}

// Food Card
function FoodCard({ food, addToCart }) {
  return (
    <div className="bg-white p-4 shadow rounded text-center hover:scale-105 transition cursor-pointer">
      <Link to={`/food/${food.id}`}>
        <img src={food.img} className="rounded-md h-32 w-full object-cover mb-2" />
        <div className="font-bold text-lg mb-1">{food.name}</div>
        <div className="text-gray-700 mb-2">₹ {food.price}</div>
      </Link>
      <button
        className="bg-green-500 text-white w-full py-1 rounded"
        onClick={() => addToCart(food)}
      >
        Add to Cart
      </button>
    </div>
  );
}

// Home Page
function Home({ addToCart }) {
  return (
    <div className="p-0">
      {/* Hero Slider */}
      <div className="h-40 w-full overflow-hidden relative">
        <div className="flex animate-slide w-[300%] h-full">
          <img src="https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg" className="w-full object-cover" />
          <img src="https://cdn.pixabay.com/photo/2016/11/21/16/02/outdoor-dining-1846137_1280.jpg" className="w-full object-cover" />
          <img src="https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg" className="w-full object-cover" />
        </div>
      </div>

      {/* Top Choices */}
      <h2 className="text-2xl font-bold p-4">Top Choices</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} addToCart={addToCart} />
        ))}
      </div>

<h2 className="text-2xl font-bold mt-8 p-4">Top Restaurants 🍽️</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 mb-6">
  {[
    {
      name: "Domino's Pizza",
      img: "https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg"
    },
    {
      name: "McDonald's",
      img: "https://cdn.pixabay.com/photo/2015/02/23/21/10/restaurant-646687_1280.jpg"
    },
    {
      name: "Biryani House",
      img: "https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_1280.jpg"
    },
    { 
      name: "Burger King",
      img: "https://cdn.pixabay.com/photo/2014/04/27/14/18/fast-food-333140_1280.jpg"
    }
  ].map((rest, idx) => (
    <div key={idx} className="bg-white p-3 shadow rounded text-center">
      <img 
        src={rest.img} 
        alt={rest.name}
        className="rounded-lg w-full h-32 object-cover"
      />
      <p className="mt-2 font-semibold">{rest.name}</p>
    </div>
  ))}
</div>


    </div>
  );
}

// Food Detail
function FoodDetail({ addToCart }) {
  const { id } = useParams();
  const item = foods.find(f => f.id == id);

  return (
    <div className="p-6 text-center">
      <img src={item.img} className="mx-auto rounded-lg h-60 w-80 object-cover" />
      <h2 className="text-3xl font-bold mt-4">{item.name}</h2>
      <p className="text-lg text-gray-700">₹ {item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}

// Cart Page
function Cart({ cartItems }) {
  return (
    <div className="p-6">
      
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? <p>No items added.</p> : (
        cartItems.map((c, i) => (
          <div key={i} className="border p-3 rounded-lg mb-2 flex justify-between">
            <span>{c.name}</span>
            <span>₹{c.price}</span>
          </div>
        ))
      )}
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer style={{background:"#222", color:"#fff", padding:"20px", textAlign:"center"}}>
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Connect With Meal Order App</h2>
          <p className="text-gray-600 text-center mb-6">
            Stay connected and get updates about offers, new dishes, and more.
          </p>


          {/* Social Links */}
          <h3 className="text-xl font-semibold mb-2">Social Media</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a className="bg-blue-600 text-white p-3 rounded-xl text-center font-medium hover:shadow" href="#">Facebook</a>
            <a className="bg-pink-500 text-white p-3 rounded-xl text-center font-medium hover:shadow" href="#">Instagram</a>
            <a className="bg-black text-white p-3 rounded-xl text-center font-medium hover:shadow" href="#">Twitter / X</a>
            <a className="bg-blue-700 text-white p-3 rounded-xl text-center font-medium hover:shadow" href="#">LinkedIn</a>
          </div>


          {/* Contact Details */}
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700">📧 Email: support@mealorder.com</p>
          <p className="text-gray-700">📞 Phone: +91 9876543210</p>


          {/* About */}
          <h3 className="text-xl font-semibold mt-6 mb-2">About Meal Order</h3>
          <p className="text-gray-600">
            We deliver fresh and delicious meals directly to your doorstep. Fast service,
            best taste, and customer happiness always! 🍽️✨
          </p>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 rounded-t-xl">
        © {new Date().getFullYear()} Meal Order App — Eat Fresh, Live Healthy
      </footer>
    </div>
    </footer> 
  );
}

// Main App
export default function App() {
  const [cart, setCart] = useState([]);
  const [showMsg, setShowMsg] = useState(false);


  const addToCart = (food) => {
    setCart([...cart, food]);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
  };

  return (
    <Router>
      <NavBar cart={cart.length} />
      
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/food/:id" element={<FoodDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
         
      </Routes>
      {showMsg && (
        // <div className="fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce"
       <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg 
                 text-lg font-semibold animate-bounce"
        >
          ✅ Added Successfully
        </div>
      )} 
      <Footer />
    </Router>
  );
}
