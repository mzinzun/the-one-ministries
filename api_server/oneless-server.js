const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
require("./database/mongoose-connection.js");
require("dotenv").config()

const app = express();

const PORT = process.env.API_PORT || 4000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(`incoming ${req.method} request for ${req.url}`);
    next()
})

routes(app)

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

