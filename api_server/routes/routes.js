// const user_Controller = require('../controllers/user_controller.js')

// const user_Controller = require('../controllers/user_controller2.js')

const scrip_Controller = require('../controllers/scrip_controller.js')

const encourage_Controller = require('../controllers/encourage_controller')

const charity_Controller = require('../controllers/charity_controller')

const contirbution_Controller = require('../controllers/contribution_controller')

const study_Controller = require('../controllers/study_controller')

// const authenticateToken = require('../helper/verifyJWT')

module.exports = (app) => {
    // navigation tools //

// app.post('/create_user', user_Controller.createUser);
// app.post('/login', user_Controller.login);
// app.post('/contribution', authenticateToken,contirbution_Controller.createContribution);


app.get('/get_charity', charity_Controller.getCharity)
app.get('/get_scriptures', scrip_Controller.getScriptures)
app.get('/get_encourage', encourage_Controller.getEncourage)
app.get('/get_studies', study_Controller.getStudies)
// app.get('/get_user/:id', user_Controller.getUser)
// app.get('/get_contribution/:id', contirbution_Controller.getContribution)

// app.put('/update_user/:id', authenticateToken, user_Controller.updateUser)
// app.put('/add_moral/:id', user_Controller.addMoral)

// app.delete('/delete_Moral/:id/:index', user_Controller.deleteMoral)
// app.delete('/delete_user/:id', user_Controller.deleteUser)

}
