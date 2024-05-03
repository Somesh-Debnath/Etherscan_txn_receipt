"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TransactionReceiptSchema = new mongoose_1.Schema({
    txHash: { type: String, required: true },
    receipt: { type: mongoose_1.Schema.Types.Mixed, required: true } // Mixed type for dynamic structure
});
exports.default = (0, mongoose_1.model)('TransactionReceipt', TransactionReceiptSchema);
