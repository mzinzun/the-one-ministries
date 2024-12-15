const Study = require("../models/Study")

module.exports = {
    // For walkWord //
    getStudies (req, res) {
        Study.find()
        .then(resp => {
            res.json(resp)
        })
        .catch(e => {
            console.log(e)
            res.json(e)
        })
    }
}