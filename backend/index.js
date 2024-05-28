const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "https://surajprajapati.vercel.app",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const data_routes = require("./routes/route.js");

app.use("/api", data_routes);

const PORT = process.env.PORT || 8000;
const connectDB = require("./dbConnection.js");
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is listening on PORT: " + PORT);
    });
  })
  .catch((error) => {
    console.log("Error");
  });
