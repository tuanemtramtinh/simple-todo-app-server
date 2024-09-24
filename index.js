const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./configs/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

database.connect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routeClient = require('./routes/index.route');
routeClient(app);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
})

