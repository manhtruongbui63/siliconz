require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const bodyParser = require("body-parser");
const cors = require("cors");

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// connect mongodb
mongoose
  .connect("mongodb://localhost/siliconzDB", {})
  .then(() => {
    console.log("✅ Connected success !");
  })
  .catch(() => {
    console.log("❌ Connected false");
  });

// middlewares
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

// routes
app.use("/cart", cartRoute);
app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/uploads", express.static("./uploads"));

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Server is OK Em Yeu nhé",
  });
});

// errer
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// errer handle
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

// start
const port = app.get("port") || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
