const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const feedingSchema = new Schema({
    baby: {type: Schema.Types.ObjectId},
    feedingtype: {type: String, enum: ['Breastfeeding', 'Bottle Feeding', 'Solids', 'Baby Food']},
    timestamp: String,
})

module.exports = mongoose.model('Feeding', feedingSchema);
