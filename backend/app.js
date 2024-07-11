require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

// Middleware to parse JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
