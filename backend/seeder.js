import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
// data to send
import products from "./data/products.js";
import users from "./data/users.js";
// model
import Product from "./model/productModel.js";
import User from "./model/userModel.js";
import Order from "./model/orderModel.js";
// connect to database
import db from "./database/index.js";
dotenv.config();
db();

const importData = async function () {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUsers = createdUsers[0]._id;

    const sampleProducts = products.map(product => {
      return { ...product, user: adminUsers };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

const destroyData = async function () {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`err`.red.inverse);
    process.exit();
  }
};

// check if there command -d at third argument then destroy
// - node backend/seeder.js -d
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
