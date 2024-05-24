const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const cookie = req.body.access_token;

  if (!cookie) {
    return res.send({
      success: false,
      message: "Invalid Token",
      CookiValue: cookie,
    });
  }

  const token = cookie.slice(13);

  try {
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        return res.send({
          success: true,
          message: "Invalid Token",
          from: "verification",
          access_token: token,
          error: err,
          SECRET_KEY: process.env.SECRET_KEY,
        });
      }
    });

    next();
  } catch (error) {
    console.log(error);
  }

  next();
};

module.exports = { verifyToken };
