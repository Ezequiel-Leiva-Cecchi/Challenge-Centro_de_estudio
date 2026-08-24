import mongoose from 'mongoose';
import { MONGODB_URL } from '../config/config';

const mongooseLoader = async (): Promise<void> => {
  await mongoose.connect(MONGODB_URL, {
    serverSelectionTimeoutMS: 10_000,
  });
  console.log('MongoDB conectado');
};

export const disconnectMongoose = async (): Promise<void> => {
  await mongoose.disconnect();
};

export default mongooseLoader;
