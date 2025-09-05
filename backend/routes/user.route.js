import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../controllers/user.controller.js";
import protect  from "../middleware/auth.middleware.js"; // middleware we made earlier

const router = express.Router();

// GET profile
router.get("/:id", protect, getUserProfile);

// UPDATE profile
router.put("/:id", protect, updateUserProfile);

// DELETE profile
router.delete("/:id", protect, deleteUserProfile);

export default router;
