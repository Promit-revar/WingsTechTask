const express = require('express');
require('dotenv').config();
const router = require('./src/routes');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

app.listen(port, ()=>`Server is running on port: ${port}`);
