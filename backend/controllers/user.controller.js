// GET /api/users/:id → Get user profile (username, bio, posts, followers).

// PUT /api/users/:id → Update profile (bio, profilePic, etc.).

// DELETE /api/users/:id → Delete user account.

import User from "../models/User.model.js";

// @desc   Get user profile
// @route  GET /api/users/:id
// @access Private / Public (depending on your needs)
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password") // exclude password
      .populate("posts") // if you have a Post model
      .populate("followers", "username email")
      .populate("following", "username email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Get profile error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc   Update user profile
// @route  PUT /api/users/:id
// @access Private
export const updateUserProfile = async (req, res) => {
  const { bio, profilePic, fullName } = req.body;

  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check if the logged-in user matches the profile owner
    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    user.bio = bio || user.bio;
    user.profilePic = profilePic || user.profilePic;
    user.fullName = fullName || user.fullName;

    const updatedUser = await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        bio: updatedUser.bio,
        profilePic: updatedUser.profilePic,
        fullName: updatedUser.fullName,
      },
    });
  } catch (error) {
    console.error("Update profile error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc   Delete user account
// @route  DELETE /api/users/:id
// @access Private
export const deleteUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // check if logged-in user is the account owner
    if (user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await User.deleteOne({ _id: user._id });

    res.status(200).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error("Delete profile error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
