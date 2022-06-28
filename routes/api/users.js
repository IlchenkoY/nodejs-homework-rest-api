const express = require("express");

const { upload, auth, validation, ctrlWrapper } = require("../../middlewares");
const {
  joiSignUpSchema,
  joiLoginSchema,
  joiStatusSchema,
} = require("../../models/user");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(joiSignUpSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get("/current", ctrlWrapper(auth), ctrlWrapper(ctrl.getCurrent));
router.post("/logout", ctrlWrapper(auth), ctrlWrapper(ctrl.logout));
router.patch(
  "/",
  validation(joiStatusSchema),
  ctrlWrapper(auth),
  ctrlWrapper(ctrl.updateSubscriptionStatus)
);
router.patch(
  "/avatars",
  ctrlWrapper(auth),
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
