import mongoose from "mongoose";
const { model, Schema } = mongoose;
const reviewSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name Product Must Be Filled"],
      minLength: [2, "Length Character Name Minimal 2"],
      maxLength: [250, "Length Character Name Maximum 250"],
    },
    rating: { type: Number, required: true },
    comment: {
      type: String,
      required: [true, "Name Product Must Be Filled"],
      minLength: [5, "Length Character Name Minimal 5"],
      maxLength: [9999, "Length Character Name Maximum 9999"],
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Name Product Must Be Filled"],
      minLength: [2, "Length Character Name Minimal 2"],
      maxLength: [250, "Length Character Name Maximum 250"],
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: [true, "Brand Product Must Be Filled"],
    },
    category: {
      type: String,
      required: [true, "Category Product Must Be Filled"],
      minLength: [2, "Length Character Category Minimal 2"],
      maxLength: [30, "Length Character Category Maximum 30"],
    },
    description: {
      type: String,
      required: [true, "Description Product Must Be Filled"],
      minLength: [2, "Length Character Description Minimal 2"],
      maxLength: [250, "Length Character Description Maximum 250"],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Price of Product Must Be Filled"],
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, "QTY of Stock Product Must Be Filled"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

export default Product;
