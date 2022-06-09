const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactShema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(contactShema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(contactShema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
