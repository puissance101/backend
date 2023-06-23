const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {MONGO_DB_CONFIG} = require('./config/app.config');
const cors = require('cors');

//connection to mongo db
mongoose.connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection to mongoDB Succesful');
}).catch((error) => {
    console.log('error connecting to mongoDB:', error);
});

//Enable cors
app.use(cors());

//Middleware to parse JSON data
app.use(express.json());

//Define a route a fetch the data
app.use('/api', require('./router/app.route'));

//start the server
app.listen(7000, ()=>{
    console.log('server started on port 7000');
})