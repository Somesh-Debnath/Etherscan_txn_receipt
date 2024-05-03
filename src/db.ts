import mongoose from 'mongoose';

require('dotenv').config();
const mongoURI = "mongodb+srv://Somesh:GIN81CHuTanh8LKs@cluster0.tm16xit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" || ''; 

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Atlas connected');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
