const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        paymentType: String,
        charity: String,
        amount: Number,
    }
)

module.exports = mongoose.model('contribution', contributionSchema)
