var express = require('express');
var cors = require('cors');
const connectDb = require('./server/database/connection');

require('dotenv').config();

var app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDb();

const port = process.env.port || 8080;

app.listen(`${port}`, () => {
    console.log(`Server is running on ${port}`);
});