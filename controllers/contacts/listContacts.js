const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite = null } = req.query;
  const skip = (page - 1) * limit;

  let searchParams = { owner: _id };
  if (favorite !== null) {
    searchParams = { owner: _id, favorite };
  }
  const contacts = await Contact.find(searchParams, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email");

  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = listContacts;
