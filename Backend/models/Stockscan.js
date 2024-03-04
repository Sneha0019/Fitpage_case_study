const mongoose = require("mongoose");

const stockScanSchema = new mongoose.Schema({
    id:{
    type:Number,
    required:true
    },
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    criteria: [
        {
            type: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            variable: {
                type: Object  
            }
        }
    ]
});

const StockScan = mongoose.model('StockScan', stockScanSchema);
module.exports = StockScan;
