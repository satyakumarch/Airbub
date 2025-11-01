import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

let port = process.env.PORT || 8000;

let app = express();
app.use(express.json());
app.use(cookieParser());

// Root route for quick sanity check
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

// Auth routes
app.use("/api/auth", authRouter);

app.listen(port, () => {
  connectDb();
  console.log(`Server started on http://localhost:${port}`);
});