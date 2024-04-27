import mongoose from 'mongoose';

import { DATABASE_URL } from '../../constants.js'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DATABASE_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export { connectDB };