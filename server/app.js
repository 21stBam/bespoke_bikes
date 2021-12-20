'use strict';

const express = require("express");
const routes = require("./routes/api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', routes);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 400);
    res.json({
        error: err.message
    });
});

module.exports = app;
