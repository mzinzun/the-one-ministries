const User = require("../models/User");
const createJWT = require('../helper/createJWT');

module.exports = {
    // CRUD to handle user interface //
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user && user._id) {
                    user.comparePassword(req.body.password, async (err, isMatch) => {
                        if (err) {
                            console.log(err)
                            res.status(403).json({ success: false, error: err })
                        }
                        if (isMatch) res.json({ user: user, token: await createJWT(user) })
                        else res.json({ success: false, message: `Incorrect Password` })
                    });
                } else {
                    res.json({ success: false, message: "No user Found" })
                }
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false, message: "problem! problem problem!" })
            })
    },
    getUser: (req, res) => {
        User.findById(req.params.id)
            .then(user => {
                res.json(user)
            })
            .catch(e => {
                console.log(e)
            })
    },
    createUser: async (req, res) => {
        try {
            const { email, password } = req.body;
            // Check to see if all credentials are present
            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    error: 'You must provide a user credentials',
                });
            }
            // Check and see if user already exists 
            const user = await User.findOne({ email: email });
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: 'User already registered.',
                });
            }
            // Create a new user if new user
            const createdUser = await User.create(req.body);
            // Generate token
            const token = await createJWT(createdUser);
            // Return token to Frontend
            return res.status(200).json({
                success: true,
                token: token,
                message: 'Created user successfully.',
                user: createdUser
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Failed creating user, something went wrong.',
            });
        }
    },
    addMoral: (req, res) => {
        const { id } = req.params
        User.findById(id)
            .then(user => {
                user.morals.push(req.body.moral);
                user.save()
                    .then(resp => {
                        res.json(resp)
                    })
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false, error: e })
            })
    },
    updateUser: (req, res) => {
        const { id } = req.params
        User.findByIdAndUpdate(id, req.body, { new: true })
            .then(resp => {
                res.json(resp)
            })
            .catch(error => {
                console.log(error)
            })
    },
    deleteUser: (req, res) => {
        const { id } = req.params
        User.findByIdAndDelete(id)
            .then(user => {
                res.json({
                    user,
                    message: 'Delete Successful'
                })
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteMoral: (req, res) => {
        const { id, index } = req.params
        User.findById(id)
            .then(user => {
                user.morals.splice(index, 1)
                user.save()
                    .then(resp => {
                        res.json(resp)
                    })
            })
    }
}