import ApiError from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let error = err;

  // Convert normal Error to ApiError
  if (!(error instanceof ApiError)) {
    error = new ApiError(
      error.statusCode || 500,
      error.message || "Internal Server Error",
    );
  }

  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
    errors: error.errors,
  });
};

export default errorHandler;
