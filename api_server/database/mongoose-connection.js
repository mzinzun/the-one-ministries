const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/competency', {})
  .then(() => console.log('Connected!'));
// if (process.env.TEST) {
//     mongoose.connect("mongodb://localhost/test", {})
// } else {
//     mongoose.connect("mongodb://localhost/competency", {})
// }

module.exports = mongoose.connection.on('open', () => {
    console.log(`Connected to competency collection`);
})
