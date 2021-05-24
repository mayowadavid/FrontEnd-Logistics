"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright mayowadavid
 *
 * @created 2021.03.28
 * @modified 2021.03.28
 *
 * @description
 * @augments
 * @example
 *
 */

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});

const handle = app.getRequestHandler();

app
.prepare()
.then(() => {
    const server = express();

    // get
    server.get("*", (req, res) => {
        return handle(req, res);
    });
    // port
    server.listen(3000, (err) => {
        if (err) {
            throw err;
        }
        console.log("> Ready on http://localhost:3000");
    });
})
.catch((err) => {
    console.error(err.stack);
    process.exit(1);
});