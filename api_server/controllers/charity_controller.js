const Charity = require("../models/Charity")

module.exports = {
    // For Support page //
    getCharity(req, res) {
        Charity.find()
            // .sort({text: 1})
            .then(resp => {
                // console.log(resp)
                res.json(resp)
            })
            .catch(e => {
                console.log(e)
                res.json(e)
            })
    },
}