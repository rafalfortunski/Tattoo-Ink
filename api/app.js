const dotenv = require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());

app.use(
  session({
    secret: "roman",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", () => {
  console.log("Connected to mlab database!");
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
  app.use("/api", routes);
});
