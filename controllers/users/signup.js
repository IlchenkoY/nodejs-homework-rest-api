const bcrypt = require("bcryptjs");
const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ email, password: hashPassword });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription: result.subscription,
      },
    },
  });
};

module.exports = signup;
