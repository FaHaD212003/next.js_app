import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Failed to connect to database");
  }
}

export default connectDB;
