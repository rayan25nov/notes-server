require("dotenv").config();

const port = process.env.PORT || 8000;

const app = require("./middleware/middleware");

app.get("/", (req, res) => {
  res.send("<h1>Notes Backend server</h1>");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
