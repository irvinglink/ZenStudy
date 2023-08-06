"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controllers/userController");
const databaseRouter = express_1.default.Router();
databaseRouter.get("/setupDatabase", userController_1.createDatabase);
databaseRouter.get("/setupTable", userController_1.createUsersTable);
databaseRouter.post("/registerUser", userController_1.registerUser);
databaseRouter.delete('/deleteUser', userController_1.deleteUser);
databaseRouter.post('/existsUser', userController_1.existsUser);
databaseRouter.get("/getUserData", userController_1.getUserData);
exports.default = databaseRouter;
