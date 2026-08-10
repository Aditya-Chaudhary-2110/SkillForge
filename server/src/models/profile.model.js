import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
      trim: true,
      maxlength: 300,
    },

    github: {
      type: String,
      default: "",
      trim: true,
    },

    linkedin: {
      type: String,
      default: "",
      trim: true,
    },

    portfolio: {
      type: String,
      default: "",
      trim: true,
    },

    location: {
      type: String,
      default: "",
      trim: true,
    },

    education: {
      type: String,
      default: "",
      trim: true,
    },

    experience: {
      type: String,
      default: "",
      trim: true,
    },

    targetRole: {
      type: String,
      default: "",
      trim: true,
    },

    targetCompany: {
      type: String,
      default: "",
      trim: true,
    },

    targetPackage: {
      type: Number,
      default: 0,
      min: 0,
    },

    preferredLanguage: {
      type: String,
      default: "English",
    },

    preferredTheme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "light",
    },
  },
  {
    timestamps: true,
  },
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
