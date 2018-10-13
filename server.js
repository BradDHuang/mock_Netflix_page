
// basic server setup with express

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const items = require("./routes/api/items");

const app = express();

// bodyParser middleware
app.use(bodyParser.json());

app.use(cors());
  
// use routes
app.use("/api/items", items);

const port = 8081;

app.listen(port, () => console.log(`Server started on port ${port}`));





