import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { NextFunction } from "connect";
import createHttpError from "http-errors";
import { ErrorRequestHandler } from "express-serve-static-core";
import morgan from "morgan";
import bodyParser from "body-parser";
import databaseRouter from "./routes/database/databaseRouter"

const app: Express = express();
const PORT: Number = Number(process.env.PORT);

// MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }))
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}))

app.use('/api/users', databaseRouter)

// RESPONSE ?
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send("Page not found");
};

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
