import express from "express";
import { Request, Response } from "express";
import router from "./router";
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("ok, we are green");
});

app.use("/api", router);

export default app;
