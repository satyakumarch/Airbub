// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDb from "./config/db.js";
// import authRouter from "./routes/auth.route.js";
// import cookieParser from "cookie-parser";
// dotenv.config();

// let port = process.env.PORT || 8000;

// let app = express();
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//   origin:'http://localhost:5173',
//   credentials:true,
// }))

// // Root route for quick sanity check
// app.get("/", (req, res) => {
//   res.send("API is running ✅");
// });

// // Auth routes
// app.use("/api/auth", authRouter);

// app.listen(port, () => {
//   connectDb();
//   console.log(`Server started on http://localhost:${port}`);
// });

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import listingRouter from "./routes/listing.route.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ FIXED: Proper CORS configuration
const allowedOrigin = "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

// ✅ Handle preflight requests for all routes
// app.options("*", cors({
//   origin: allowedOrigin,
//   credentials: true,
// }));

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
}));

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("API is running ✅");
});

// ✅ Routes
app.use("/api/auth", authRouter);
app.use("/api/user",userRouter);
app.use("/api/listing",listingRouter);


// ✅ Start server *after* DB connection
const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`✅ Server started on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

startServer();
