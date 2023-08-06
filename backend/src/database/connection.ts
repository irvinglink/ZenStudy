import mysql from 'mysql'
import { logger } from "../constants/messages";

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "zen_study_users"
});

database.connect(err => {
    if (err) throw err;
    console.log(logger.databaseConnected)
})

export default database;