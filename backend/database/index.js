import mongoose from "mongoose";
import { dbUser, dbPass, dbHost, dbPort, dbName } from "../config/index.js";

const db = async function () {
  try {
    const conn = await mongoose.connect(
      `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (er) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default db;
