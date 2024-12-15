const mongoose = require('mongoose');

if (process.env.TEST) {
    mongoose.connect("mongodb://localhost/test", {})
} else {
    mongoose.connect("mongodb://localhost/competency", {})
}

module.exports = mongoose.connection.on('open', () => {
    console.log(`Connected to competency test=${process.env.TEST}`)
})