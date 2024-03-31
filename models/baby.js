const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const babySchema = new Schema ({
    name: { type: String},
    dateofbirth: {type: Date},
    gender: {type: String, enum: ['Male', 'Female']}
}, {timestamps: true
});

module.exports = mongoose.model('Baby', babySchema);