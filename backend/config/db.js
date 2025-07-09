import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    console.log('Mongo URI:', process.env.MONGODB_URL); // Debug line
    await mongoose.connect(process.env.MONGODB_URL); // ✅ Updated key and simplified options
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};

export default connectDB;
