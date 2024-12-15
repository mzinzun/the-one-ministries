const mongoose = require('mongoose');

const encourageSchema = new mongoose.Schema(
    {
        quote: String,
        text: String,
        scripture: String,
        prayer: String
    }
)

const Encourage = mongoose.model('encourage', encourageSchema)

module.exports = Encourage;