import { Request, Response } from "express";
import database from "../database/connection";
import queries from "../constants/queries";
import { logger } from "../constants/messages";

// CREATE DATABASE
export const createDatabase = (req: Request, res: Response) => {
  database.query(queries.setupDatabase, (err, result) => {
    if (err) throw err;
    return res.status(201).send(logger.databaseCreated);
  });
};

// CREATE TABLE
export const createUsersTable = (req: Request, res: Response) => {
  database.query(queries.createUsersTable, (err, result) => {
    if (err) throw err;
    return res.status(202).send(logger.tableSuccess);
  });
};

// REGISTER USER
export const registerUser = (req: Request, res: Response) => {
  const { uuid, username, password, email } = req.body;

  database.query(
    queries.registerUser,
    { uuid, username, password, email },
    (err, result) => {
      if (err) res.json(err);
      return res.status(203).json(result);
    }
  );
};

// DELETE USER
export const deleteUser = (req: Request, res: Response) => {
  const { username } = req.body;

  database.query(queries.deleteUser, [username], (err, result) => {
    if (err) res.json(err);
    return res.status(200).json(result);
  });
};

// EXISTS USER
export const existsUser = (req: Request, res: Response) => {
  const { username } = req.body;

  database.query(queries.existsUser, [username], (err, result) => {
    if (err) {
      res.json(err);
    } else {
      const userExists = result[0].count > 0;
      res.status(200).json({ exists: userExists });
    }
  });
};

// GET USER DATA
export const getUserData = (req: Request, res: Response) => {
  console.log("test")
  const { username } = req.body;

  database.query(queries.getUserData, [username], (err, result) => {
    if (err) {
      res.json(err)
    }
    res.status(200).json(result)
  });
};
