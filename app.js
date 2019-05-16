const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

//Import Routes
const beerRoute = require('./routes/beers');

    //Middleware
app.use('/beer', beerRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to The Beer Database');
});

//Start listening to the server
app.listen(3000); 