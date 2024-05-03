import TransactionReceipt from '../models/TransactionReceipt';

const express = require('express');
const router = express.Router();
const { Web3 } = require('web3');
require('dotenv').config();

const web3 = new Web3("https://eth-sepolia.g.alchemy.com/v2/HOYnAJZHvTANDukNwDzRghbTPow61kmL");

// GET /transaction/:txHash
router.get('/:txHash', async (req: { params: { txHash: any; }; }, res: any) => {
    const { txHash } = req.params;
    try {
        const transactionReceipt = await TransactionReceipt.findOne({ txHash });
        if (transactionReceipt) {
            res.status(200).json(transactionReceipt);
        } else {
            res.status(404).json({ error: 'Transaction receipt not found' });
        }
    } catch (error) {
        console.error('Error retrieving transaction receipt:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /transaction
router.post('/:txhash', async (req: { params: { txhash: any; }; }, res: any) => {
    const txHash = req.params.txhash;
    try {
        let receipt = await web3.eth.getTransactionReceipt(txHash);
        // Convert BigInt values to strings
        receipt = JSON.parse(JSON.stringify(receipt, (_, v) => typeof v === 'bigint' ? v.toString() : v));
        receipt.logs = receipt.logs.map(log => web3.utils.hexToUtf8(log.data));
        const savedReceipt = await TransactionReceipt.create({ txHash, receipt });
        res.status(201).json(savedReceipt);
    } catch (error) {
        console.error('Error saving transaction receipt:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;

