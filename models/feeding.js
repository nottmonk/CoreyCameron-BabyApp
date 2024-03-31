const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const feedingSchema = new Schema({
    baby: {type: Schema.type.ObjectId},
    feedingtype: {type: String, enum: ['Breastfeeding', 'Bottle Feeding', 'Solids', 'Baby Food']},
    timestamp: Date,
})

module.exports = mongoose.model('Feeding', feedingSchema);
