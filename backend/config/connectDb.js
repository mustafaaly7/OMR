import mongoose from "mongoose";
import "dotenv/config";

export const ConnectDb = async () => {
  try {
    const owner = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Db Connected", owner.connection.name);
  } catch (error) {
    console.log("error connectoing db", error);
  }
};