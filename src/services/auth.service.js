const jwt = require("jsonwebtoken");
const db = require("../models");
const bcrypt = require("bcrypt");
const HTTPError = require("../utils/errors/http.error");
const NotFoundError = require("../utils/errors/resource.not.found.error");
const saltRounds = 10;
exports.loginService = async (data) => {
  const { email, password } = data;
  const user = await db.Auth.findOne({
    where: {
      email,
    },
  });
  if (!user) throw new NotFoundError("No Such User Found");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new HTTPError("Invalid Credentials", 400);
  const accessToken = jwt.sign({ userData: user }, process.env.JWT_SECRET);
  return { accessToken };
};
exports.registerUserService = async (data) => {
  const { email, password, role } = data;
  const user = await db.Auth.findOne({
    where: {
      email,
    },
  });
  if (user) throw new HTTPError("User Already Exists", 400);
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const result = await db.Auth.create({
    email,
    password: hashedPassword,
    role,
  });
  return result;
};
