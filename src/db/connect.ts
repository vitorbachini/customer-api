import mongoose from 'mongoose';
import 'dotenv/config';

const connection = process.env.MONGO_URI as string;

export const connectDB = () => {
    mongoose.connect(connection);
};
