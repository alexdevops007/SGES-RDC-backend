const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./routes");
const http = require("http");
const socketIo = require("socket.io");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});

// Cors option
const corsOptions = {
  origin: ["http://localhost:8080", "https://sges-rdc-frontend.vercel.app"],
  optionsSuccessStatus: 200,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};

// Middleware
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Attach Socket.IO instance to request object
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://sges:123sges123@cluster-sges.wkyoy.mongodb.net/SGES-DB?retryWrites=true&w=majority&appName=Cluster-sges"
  )
  .then(() =>
    console.log(
      `Connecté à la base de données: ${mongoose.connection.host}`.bgBlue.bold
    )
  )
  .catch((error) =>
    console.error(`Error connecting to MongoDB: ${error.message}`)
  );

app.use("/proxy", (req, res) => {
  const url = "https://sges-rdc-backend.vercel.app" + req.url;
  req.pipe(request({ qs: req.query, uri: url })).pipe(res);
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api SGES-RDC" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenue sur l'api SGES-RDC" });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.bgCyan.bold);
});
