"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserData = exports.existsUser = exports.deleteUser = exports.registerUser = exports.createUsersTable = exports.createDatabase = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const queries_1 = __importDefault(require("../constants/queries"));
const messages_1 = require("../constants/messages");
// CREATE DATABASE
const createDatabase = (req, res) => {
    connection_1.default.query(queries_1.default.setupDatabase, (err, result) => {
        if (err)
            throw err;
        return res.status(201).send(messages_1.logger.databaseCreated);
    });
};
exports.createDatabase = createDatabase;
// CREATE TABLE
const createUsersTable = (req, res) => {
    connection_1.default.query(queries_1.default.createUsersTable, (err, result) => {
        if (err)
            throw err;
        return res.status(202).send(messages_1.logger.tableSuccess);
    });
};
exports.createUsersTable = createUsersTable;
// REGISTER USER
const registerUser = (req, res) => {
    const { uuid, username, password, email } = req.body;
    connection_1.default.query(queries_1.default.registerUser, { uuid, username, password, email }, (err, result) => {
        if (err)
            res.json(err);
        return res.status(203).json(result);
    });
};
exports.registerUser = registerUser;
// DELETE USER
const deleteUser = (req, res) => {
    const { username } = req.body;
    connection_1.default.query(queries_1.default.deleteUser, [username], (err, result) => {
        if (err)
            res.json(err);
        return res.status(200).json(result);
    });
};
exports.deleteUser = deleteUser;
// EXISTS USER
const existsUser = (req, res) => {
    const { username } = req.body;
    connection_1.default.query(queries_1.default.existsUser, [username], (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            const userExists = result[0].count > 0;
            res.status(200).json({ exists: userExists });
        }
    });
};
exports.existsUser = existsUser;
// GET USER DATA
const getUserData = (req, res) => {
    console.log("test");
    const { username } = req.body;
    connection_1.default.query(queries_1.default.getUserData, [username], (err, result) => {
        if (err) {
            res.json(err);
        }
        res.status(200).json(result);
    });
};
exports.getUserData = getUserData;
