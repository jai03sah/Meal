import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let cartCount = 0;

app.post("/api/cart/add", (req, res) => {
  cartCount++;
  res.json({ count: cartCount });
});

app.get("/api/cart/count", (req, res) => {
  res.json({ count: cartCount });
});

mongoose.connect("mongodb://127.0.0.1:27017/foodApp");
app.listen(5000, () => console.log("Server running on 5000"));
