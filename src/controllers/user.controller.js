import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { fullname, email, username, password } = req.body;
  // validate user details
  if ([fullname, email, username, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }


});

export { registerUser };