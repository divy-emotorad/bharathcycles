import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import formRoutes from "./routes/form.routes.js";

// setting up basic variables
dotenv.config();
connectDB();
const app = express();

// using cors
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting all routes
app.use("/api/v1/form", formRoutes);

// adding to production
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Api is Running");
  });
}

// running server on port
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
