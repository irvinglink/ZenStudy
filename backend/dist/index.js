"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const databaseRouter_1 = __importDefault(require("./routes/database/databaseRouter"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT);
// MIDDLEWARE
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.json({ limit: "5mb" }));
app.use(body_parser_1.default.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use('/api/users', databaseRouter_1.default);
// RESPONSE ?
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Page not found");
};
app.use(errorHandler);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
