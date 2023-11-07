import dotenv from "dotenv";

dotenv.config();

import "./config/db";
import app from "./server";

app.listen(3001, () => {
  console.log("ready");
});
