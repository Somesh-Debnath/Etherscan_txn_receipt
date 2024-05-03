import { Document, Schema, model } from 'mongoose';

interface ITransactionReceipt extends Document {
    txHash: string;
    receipt: any; 
}

const TransactionReceiptSchema = new Schema({
    txHash: { type: String, required: true },
    receipt: { type: Schema.Types.Mixed, required: true } // Mixed type for dynamic structure
});

export default model<ITransactionReceipt>('TransactionReceipt', TransactionReceiptSchema);
