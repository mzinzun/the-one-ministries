const mongoose = require('mongoose');

const studySchema = new mongoose.Schema(
    {
        title: String,
        topics: Array
    }
)

const Study = mongoose.model('study', studySchema)

module.exports = Study;