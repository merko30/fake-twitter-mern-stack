module.exports = errorHandler = (error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;
  if (!error.message) error.message = "Something went wrong";
  res.status(error.statusCode).json({ message: error.message });
};
