// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const routes = require("./routes");
const { errorHandler } = require("./middleware/errorMiddleware");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to log HTTP requests
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Middleware to parse JSON bodies
app.use(express.json());

// Mounting the routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

// Define the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
