const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

const app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const DBuser = process.env.MONGO_USER;
const DBpassword = process.env.MONGO_PASSWORD;

console.log("DBuser = " + DBuser);

// Replace with your Atlas MongoDB Cloud URI
const MONGO_URI =
    "mongodb+srv://" +
    DBuser +
    ":" +
    DBpassword +
    "@cluster0.llhyi.mongodb.net/Lyrical-GraphQL?retryWrites=true&w=majority";
if (!MONGO_URI) {
    throw new Error("You must provide a Atlas MongoDB Cloud URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once("open", () =>
        console.log("Connected to Atlas MongoDB Cloud instance.")
    )
    .on("error", (error) =>
        console.log("Error connecting to Atlas MongoDB Cloud:", error)
    );

app.use(bodyParser.json());
app.use(
    "/graphql",
    expressGraphQL({
        schema,
        graphiql: true,
    })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
