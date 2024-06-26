const userSchema = require("../models/userSchema.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
  // const cookie = req.header("Cookie");
  res.send({
    success: true,
    message: "Hello from dashboard",
  });
};

module.exports = { register, login, clearCookie, dashboard };
