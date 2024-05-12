const userSchema = require("../models/userSchema.js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  userSchema.create({
    name: name,
    email: email,
    password: password,
  });

  return res.json({
    name,
    email,
    password,
  });
};

const generateAccessToken = async (id, email, password) => {
  const token = jwt.sign({ id, email, password }, process.env.SECRET_KEY);
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await userSchema.findOne({ email: email });
  let matchPassword = null;

  if (findUser) {
    matchPassword = password === findUser.password;
  }

  if (!findUser || !matchPassword) {
    return res.send({
      success: false,
      message: "Sorry, only for admins",
    });
  }

  const access_token = await generateAccessToken(
    findUser._id,
    findUser.email,
    findUser.password
  );

  console.log(access_token);

  return res.cookie("access_token", access_token).json({
    success: true,
    data: {
      name: findUser.name,
      email: findUser.email,
    },
    access_token: access_token,
  });
};

const clearCookie = (req, res) => {
  return res.clearCookie("access_token").send({
    success: true,
    message: "Logout Successfully",
  });
};

const dashboard = (req, res) => {
  const cookie = req.header("Cookie");

  if (!cookie) {
    return res.send({
      success: false,
      message: "Invalid Token",
      from: "cookies are not in header",
    });
  }
  const token = cookie.slice(13);

  try {
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        return res.send({
          success: false,
          message: "Invalid Token",
          from: "cookies are not verified",
        });
      }

      return res.send({
        success: true,
        message: "Hello from dashboard",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login, clearCookie, dashboard };
