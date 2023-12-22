require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ahmed:1234@cluster0.adsvxgo.mongodb.net/mydatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, });
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB Connection Error:', error);
});
db.once('open', () => {
    console.log('Connected to Database');
});

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))