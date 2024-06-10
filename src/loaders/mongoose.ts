import mongoose from 'mongoose';
import { MONGODB_URL } from '../config/config'; 

const mongooseLoader = async () => {
  try {
    if (!MONGODB_URL) {
      console.error('Error: The DB_CONNECT variable must be defined in the environment variables');
      process.exit(1); 
    }

    // Conecta a la base de datos MongoDB
    mongoose.connect(MONGODB_URL).then(() => {
        console.log('Connected to MongoDB');
      }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);  
      });
      
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};

export default mongooseLoader;  
