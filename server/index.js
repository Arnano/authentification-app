const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 4222;

// App setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server setup
const server = http.createServer(app);
server.listen(PORT);

console.log("server:", PORT);
