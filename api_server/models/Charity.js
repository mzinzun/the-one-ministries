const mongoose = require('mongoose');

const charitySchema = new mongoose.Schema(
    {
        title: String,
        text: String,
    }
)

const Charity = mongoose.model('charity', charitySchema)

module.exports = Charity;