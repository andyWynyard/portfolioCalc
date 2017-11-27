"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var helmet = require("helmet");
var logger = require("morgan");
var cors = require("cors");
var v1_1 = require("./routes/v1");
var main_1 = require("./config/main");
var app = express();
// init mongoose
mongoose.connect(main_1.default.db);
// express middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
// :method :url :status :response-time ms - :res[content-length]
// The :status token will be colored red for server error codes, yellow for client
// error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
// init server
var server;
if (process.env.NODE_ENV !== main_1.default.test_env) {
    server = app.listen(main_1.default.port);
    console.log("Server listening on port " + main_1.default.port);
}
else {
    server = app.listen(main_1.default.test_port);
    console.log("Server listening on port " + main_1.default.test_port);
}
// router
v1_1.default(app);
// export
module.exports = server;
//# sourceMappingURL=server.js.map