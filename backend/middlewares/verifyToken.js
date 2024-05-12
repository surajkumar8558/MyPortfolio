const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const cookie = req.header("Cookie");

  if (!cookie) {
    return res.send({
      success: false,
      message: "Invalid Token",
    });
  }
  const token = cookie.slice(13);

  try {
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        return res.send({
          success: false,
          message: "Invalid Token",
        });
      }
    });

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { verifyToken };
