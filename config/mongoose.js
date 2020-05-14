const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/polling', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error in running the mongodb database, please check the configuration');
})

db.once('open', () => {
    console.log(">MongoDB running successfully.");
})