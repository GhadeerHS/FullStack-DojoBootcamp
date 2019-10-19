var mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema(
    {
    name: {type: String, required: true, unique: true,timestamps: true},
    },
);

const person = mongoose.model('Person', PersonSchema);