const express = require("express");
const dotenv = require("dotenv");
const app = express();

// start dotenv
dotenv.config();

// database, middlewares
const setDatabase = require("./config/database");
const setMiddlewares = require("./config/middlewares");

// routes
const router = require("./routes");

// errorHandler
const errorHandler = require("./config/errorHandler");

setDatabase(process.env.DB);
setMiddlewares(app);

app.use("/api", router);

// serves static html file of React application from build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// public folder html for development mode
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"))
);

// last error handler to catch all errors
app.use(errorHandler);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
