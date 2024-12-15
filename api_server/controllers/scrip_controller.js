const Scrip = require("../models/Scrip")

module.exports = {
    // Scrips on multiple pages //
    getScriptures (req, res) {
        Scrip.find()
        .then(scrips => {
            res.json(scrips)
        })
    },
}