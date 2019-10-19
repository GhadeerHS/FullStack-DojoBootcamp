// models
const mongoose = require('mongoose');
const dojoQuoteschema = new mongoose.Schema({
    name: String,
    quote: String,
    created_at: Date
});
const quote = mongoose.model('Quote', dojoQuoteschema);