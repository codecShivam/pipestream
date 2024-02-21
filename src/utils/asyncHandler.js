//using promise to handle async functions
// Alternative approach
const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
};

export { asyncHandler };

/*const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}; //higher order function in which we are passing a function as an argument and returning a function */
