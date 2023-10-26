import express from 'express';
import { Request, Response } from 'express';

import dotenv from 'dotenv';
dotenv.config();

import "./config/db";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("ok");
});

app.listen(3000, () => { console.log("ready"); });