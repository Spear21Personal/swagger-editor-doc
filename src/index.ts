import express, { Application } from 'express'
import swaggerUI from 'swagger-ui-express'
import * as swaggerDocument from './swagger.json'
import * as bodyParser from 'body-parser'
import cors from "cors";
import morgan from "morgan";
import low from "lowdb";
// const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
import * as BooksRouter from "./routes/books";
import * as ClassRouter from "./routes/classController";
import { raceController } from "./routes/raceController";

export class App {
PORT = process.env.PORT || 4000;
private app:Application
FileSync = require("lowdb/adapters/FileSync");
adapter = new this.FileSync("db.json");
private db = low(this.adapter);


	

constructor(private booksRouter:BooksRouter, private raceRouter: raceController, private classRouter: ClassRouter) {
	this.app = express();
	this.db.defaults({ books: [] }).write();

	this.app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

	this.app.db = this.db;

	this.app.use(cors());
	this.app.use(express.json());
	this.app.use(morgan("dev"));

	this.app.use( booksRouter);
	this.app.use( raceRouter);
	this.app.use( classRouter);
}





this.app.listen(this.PORT, () => console.log(`The server is running on port ${this.PORT}`));
}
