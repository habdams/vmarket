import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "./handlers/product";

const router = Router();

// router.get("/product", () => {});
router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;
