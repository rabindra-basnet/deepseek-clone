import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

export default async function connectDb() {
  if (cached.conn) return;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI)
      .then((mongoose) => mongoose);
  }
  try {
    cached.conn = await cached.promise;
  } catch (err) {
    console.log("Error connecting to MongoDB", err);
  }
  return cached.conn;
}
