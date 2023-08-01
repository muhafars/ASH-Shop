import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

/**
 * @desc Auth user & get Token
 * @route Get api/users/login
 * @access Public
 */
const authUser = asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
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
  const { name, email, password } = req.body;
  const isExists = await User.findOne({ email });
  if (isExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }
});

/**
 * @desc Logout user / clear cookie
 * @route  POST api/users/logout
 * @access  Private
 */
const logoutUser = asyncHandler(async function (req, res) {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(Date(0)),
  });
  res.status(200).json({ message: "Logged Out Successfully" });
});

/**
 * @desc Get user Profile
 * @route  GET api/users/profile
 * @access  Private
 */
const getUserProfile = asyncHandler(async function (req, res) {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

/**
 * @desc Update user profile
 * @route PUT api/users/profile
 * @access Private
 */
const updateUserProfile = asyncHandler(async function (req, res) {
  const { name, email, password } = req.body;
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }
    const updateUser = await user.save();

    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
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
