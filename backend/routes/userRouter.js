import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

router.route("/users").post(registerUser).get(getUsers);
router.route("/users/:id").delete(deleteUser).get(getUserById).put(updateUser);
router.post("/users/login", authUser);
router.route("/users/profile").get(getUserProfile).put(updateUserProfile);
router.post("/users/logout", logoutUser);

export default router;
