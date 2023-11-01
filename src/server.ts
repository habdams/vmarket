import express from "express";
import { Request, Response } from "express";
import router from "./router";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("ok, we are green");
});

app.use("/api", router);

export default app;
