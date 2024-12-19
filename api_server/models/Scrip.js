const mongoose = require('mongoose');

const scriptureSchema = new mongoose.Schema(
    {
        quote: String,
        text: String
    }
)

const Scrip = mongoose.model('scripture', scriptureSchema)

module.exports = Scrip;
