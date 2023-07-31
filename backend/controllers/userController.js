import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userModel.js";

/**
 * @desc Auth user & get Token
 * @route Get api/users/login
 * @access Public
 */
const authUser = asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // token: user.getSignedJwtToken(),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

/**
 * @desc Register new user
 * @route  Post api/users/
 * @access Public
 */
const registerUser = asyncHandler(async function (req, res) {
  res.send("register user");
});

/**
 * @desc Logout user / clear cookie
 * @route  POST api/users/logout
 * @access  Private
 */
const logoutUser = asyncHandler(async function (req, res) {
  res.send("logout user");
});

/**
 * @desc Get user Profile
 * @route  GET api/users/profile
 * @access  Private
 */
const getUserProfile = asyncHandler(async function (req, res) {
  res.send("get user profile");
});

/**
 * @desc Update user profile
 * @route PUT api/users/profile
 * @access Private
 */
const updateUserProfile = asyncHandler(async function (req, res) {
  res.send("update profile");
});

/**
 * @desc Get all users
 * @route  GET api/users
 * @access  Private/admin
 */
const getUsers = asyncHandler(async function (req, res) {
  res.send("get users");
});

/**
 * @desc Delete users
 * @route  Delete api/users/:id
 * @access  Private/admin
 */
const deleteUser = asyncHandler(async function (req, res) {
  res.send("delete user by id");
});

/**
 * @desc Get users by id
 * @route  Get api/users/:id
 * @access  Private/admin
 */
const getUserById = asyncHandler(async function (req, res) {
  res.send("get user by id");
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin

const updateUser = asyncHandler(async function (req, res) {
  res.send("Update User");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
