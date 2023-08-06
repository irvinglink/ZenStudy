"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const messages_1 = require("../constants/messages");
const database = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "zen_study_users"
});
database.connect(err => {
    if (err)
        throw err;
    console.log(messages_1.logger.databaseConnected);
});
exports.default = database;
