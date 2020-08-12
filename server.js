const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

// settup port
const port = 5000;

// parse app/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});