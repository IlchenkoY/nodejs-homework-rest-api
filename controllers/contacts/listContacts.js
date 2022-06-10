const contactsOperations = require("../../service/contacts");

const listContacts = async (req, res) => {
  const contacts = await contactsOperations.getAll();
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = listContacts;
