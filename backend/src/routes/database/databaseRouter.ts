import express from "express";
import {
  createDatabase,
  createUsersTable,
  registerUser,
  deleteUser,
  existsUser,
  getUserData,
} from "../../controllers/userController";


const databaseRouter = express.Router();

databaseRouter.get("/setupDatabase", createDatabase);
databaseRouter.get("/setupTable", createUsersTable);
databaseRouter.post("/registerUser", registerUser);
databaseRouter.delete('/deleteUser', deleteUser); 
databaseRouter.post('/existsUser', existsUser); 
databaseRouter.get("/getUserData", getUserData);

export default databaseRouter;
