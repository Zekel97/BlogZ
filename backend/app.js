const express = require("express");

//const authRoute = require("./routes/authRoute.js");

const blogRoute = require("./routes/blogRoute.js");
const cors = require("cors");

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');


const app = express();
app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.use("/uploads", express.static("uploads"));

app.use("/api/posts", blogRoute);



//Don't find route, return 404
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

//ERROR HANDLING
app.use(globalErrorHandler);


module.exports = app;