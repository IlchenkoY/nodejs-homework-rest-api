const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscriptionStatus = require("./updateSubscriptionStatus");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const reVerification = require("./reVerification");

module.exports = {
  signup,
  login,
  logout,
  getCurrent,
  updateSubscriptionStatus,
  updateAvatar,
  verifyEmail,
  reVerification,
};
