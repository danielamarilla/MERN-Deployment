const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
require('./config/mongoose.config');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/pets.routes')(app);

app.listen(port, () => {
    console.log("Listening at Port 8000")
})