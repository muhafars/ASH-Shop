import mongoose from "mongoose";
// import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name User Must Be Filled"],
      minLength: [5, "Length Character Name User Minimal 5"],
      maxLength: [50, "Length Character Name User Maximum 50"],
    },
    email: {
      type: String,
      required: [true, "AddressName Must Be Filled"],
      minLength: [12, "Length Character AddressName Minimal 12"],
      maxLength: [40, "Length Character AddressName Maximum 40"],
    },
    password: {
      type: String,
      required: [true, "Password Must Be Filled"],
      minLength: [8, "Length Character Password Minimal 8"],
      maxLength: [50, "Length Character Password Maximum 50"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// Encrypt password using bcrypt
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const User = mongoose.model("User", userSchema);

export default User;
