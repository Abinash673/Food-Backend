import express from "express";
import cors from 'cors';
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
const host = process.env.HOST || '127.0.0.1'; // Use a valid hostname or IP address

// middlewares
app.use(express.json());
app.use(cors({
  origin: ['https://food-front-byak.netlify.app/',"http://localhost:5174",], // Allow requests from your frontend URL
  credentials: true, // Optional: Allow cookies and authentication headers
}));

// db connection
connectDB();

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server with the specified hostname and port
app.listen(port, host,"0.0.0.0", () => {
  console.log(`Server started on http://${host}:${port}`);
});
