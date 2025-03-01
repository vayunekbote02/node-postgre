require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const cors = require("cors");
const http = require("http");
const indexRouter = require("./routes/indexRouter");
const connectToDatabase = require("./config/db"); // Import the database connection function

const PORT = process.env.PORT || 3000;

// Create the express app
const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Define the routes
app.use("/", indexRouter);

// Function to start the server
const startServer = () => {
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Connect to the database and start the server
connectToDatabase()
  .then((client) => {
    module.exports = { app, client };
    startServer();
  })
  .catch((err) => {
    console.error(
      "Failed to start the server due to database connection error"
    );
  });
