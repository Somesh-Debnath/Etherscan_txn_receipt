// const { MongoClient } = require('mongodb');
// const { Web3 } = require('web3');

// // Connect to MongoDB
// const mongoURI = 'mongodb+srv://Somesh:GIN81CHuTanh8LKs@cluster0.tm16xit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
// const client = new MongoClient(mongoURI);

// // Connect to Ethereum network
// const providerUrl = 'https://eth-sepolia.g.alchemy.com/v2/HOYnAJZHvTANDukNwDzRghbTPow61kmL'; 
// const web3 = new Web3(providerUrl);

// //Function to save transaction receipt to MongoDB
// async function saveTransactionReceiptToMongoDB(txHash, receipt: any) {
//     try {
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection('transactionReceipts');
//         const result = await collection.insertOne({ txHash, receipt });
//         console.log(`Transaction receipt saved to MongoDB with _id: ${result.insertedId}`);
//     } catch (error) {
//         console.error('Error saving transaction receipt to MongoDB:', error);
//     } finally {
//         await client.close();
//     }
// }

// // Function to retrieve transaction receipt by hash and save it to MongoDB
// async function retrieveTransactionReceiptAndSaveToMongoDB(txHash) {
//     try {
//         const receipt = await web3.eth.getTransactionReceipt(txHash);
//         if (receipt) {
//             // await saveTransactionReceiptToMongoDB(txHash, receipt);
//             console.log('Transaction receipt:', receipt);
//         } else {
//             console.log('Transaction receipt not found for the provided hash.');
//         }
//     } catch (error) {
//         console.error('Error retrieving transaction receipt:', error);
//     }
// }

// // Example usage
// const transactionHash = '0xf5a263f254c16a14c3536a7842ffbf48679911e65c167bd6ed789dd7abf8aec0'; 
// retrieveTransactionReceiptAndSaveToMongoDB(transactionHash);



import connectDB from './db';
import transactionRouter from './routes/transactionRouter';

const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/transaction', transactionRouter);

// Start Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
