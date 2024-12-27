const express = require("express");
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys"); 
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
require('./models/model')
require('./models/post')
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/createpost'));

mongoose.connect(mongoUrl);
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to the database");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
