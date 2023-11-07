import express from "express";
import { Request, Response } from "express";
import morgan from "morgan";
import router from "./router";
import { protect } from "./modules/auth";

import { getAllProducts, getProduct } from "./handlers/general";
import { createNewUser } from "./handlers/users";
import { signin } from "./handlers/users";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("ok, we are green");
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

app.get("/products", getAllProducts);
app.get("/product", getProduct);

export default app;
