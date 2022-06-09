const createErorr = require("http-errors");
const contactsOperations = require("../../models/contacts");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateById(contactId, req.body);
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

module.exports = updateContact;
