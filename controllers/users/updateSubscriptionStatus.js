const { User } = require("../../models");

const updateSubscriptionStatus = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      user: {
        subscription: result.subscription,
      },
    },
  });
};

module.exports = updateSubscriptionStatus;
