const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        avatarURL,
        email,
        subscription: result.subscription,
      },
    },
  });
};

module.exports = signup;
