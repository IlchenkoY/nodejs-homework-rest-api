class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(err.name);
  console.log(err.code);
  console.log(error.message);

  if (err.name === "CastError") {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  if (err.name === "ValidationError") {
    const message = `${error.message}`;
    error = new ErrorResponse(message, 400);
  }

  if (err.code === 11000) {
    const message = "Email in use";
    error = new ErrorResponse(message, 409);
  }

  if (err.name === "TypeError") {
    const message = "Email is wrong or not verify, or password is wrong";
    error = new ErrorResponse(message, 401);
  }

  if (
    err.name === "JsonWebTokenError" ||
    error.message === "Not authorized" ||
    err.name === "TokenExpiredError"
  ) {
    const message = "Not authorized";
    error = new ErrorResponse(message, 401);
  }

  if (err.message === "User not found") {
    error = new ErrorResponse(err.message, 404);
  }

  if (err.message === "Verification has already been passed") {
    error = new ErrorResponse(err.message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
