const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to Mongo DB"))
  .catch((err) => console.log(err));

module.exports = mongoose;
