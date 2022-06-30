const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
// const { sendEmail } = require("./helpers");

dotenv.config();

// const email = {
//   to: "laber70628@weepm.com",
//   from: "",
//   subject: "Тестовая2 заявка с сайта",
//   html: "<p>С сайта пришла тестовая2 заявка</p>",
// };

// sendEmail(email);

const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");
const errorHandler = require("./errors/errorHandler");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
