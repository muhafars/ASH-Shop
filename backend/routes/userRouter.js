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
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/users").post(registerUser).get(protect, admin, getUsers);
router.post("/users/login", authUser);
router.post("/users/logout", logoutUser);
router.route("/users/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router
  .route("/users/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
