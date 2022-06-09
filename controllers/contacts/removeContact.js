const createErorr = require("http-errors");
const contactsOperations = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeById(contactId);
  if (!result) {
    throw createErorr(404, `Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = removeContact;
