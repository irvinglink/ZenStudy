"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queries = {
    setupDatabase: "CREATE DATABASE [IF NOT EXISTS] zen_study_users",
    createUsersTable: `CREATE TABLE IF NOT EXISTS users(uuid VARCHAR(36) PRIMARY KEY,
    username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, user_profile JSON)`,
    registerUser: "INSERT INTO users SET ?",
    deleteUser: "DELETE FROM users WHERE username = ?",
    existsUser: "SELECT COUNT(*) as count FROM users WHERE username = ?",
    getUserData: "SELECT * FROM users WHERE username = ?"
};
exports.default = queries;
