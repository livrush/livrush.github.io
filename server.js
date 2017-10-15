const express = require('express');
const bodyParser= require('body-parser');
require('dotenv').config();
const app = express();
const path = require('path');
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`listening at http://${HOST}:${PORT}`));