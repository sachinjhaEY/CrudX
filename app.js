const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const basicsRouter = require("./routes/basics");
const AppError = require("./utils/appError");
const globalAppError = require("./controllers/errorController");

const app = express();

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Route handlers
app.use("/api/v1/users", basicsRouter); // Route mounting

// Undefined api access
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Middleware call for global error handler
app.use(globalAppError);

module.exports = app;
