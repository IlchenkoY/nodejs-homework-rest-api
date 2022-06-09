const createErorr = require("http-errors");
const contactsOperations = require("../../models/contacts");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getById(contactId);
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

module.exports = getContactById;
