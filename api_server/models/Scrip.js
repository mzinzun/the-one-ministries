const mongoose = require('mongoose');

const scriptureSchema = new mongoose.Schema(
    {
        quote: String,
        scripture: String
    }
)

const Scrip = mongoose.model('scripture', scriptureSchema)

module.exports = Scrip;
