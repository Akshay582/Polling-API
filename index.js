const express = require('express');
const app = express();

const mongoDB = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("<h2 style='color:blue;'>Polling API prototype.</h2>")
});

app.use('/api', require('./api/routes'));

app.listen(8000, err => {
    if(err) {console.log('Error in listening to the port: 8000')};
    console.log("Port: 8000");
})