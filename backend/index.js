const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   cors({
//     origin: "https://my-portfolio-six-mocha-53.vercel.app/",
//     optionsSuccessStatus: 200,
//   })
// );

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
