const { sendEmail } = require("../../helpers");
const { User } = require("../../models");

const reVerification = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user.verify) {
    const mail = {
      to: email,
      subject: "Подтверждение email",
      html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Подтвердить email</a>`,
    };
    await sendEmail(mail);
  } else {
    throw new Error("Verification has already been passed");
  }
  res.json({
    messege: "Verification email sent",
  });
};

module.exports = reVerification;
