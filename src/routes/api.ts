import { Router } from "express";
const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Inventory Managment");
});

router.post("/inv");
router.patch("/inv/:productId");
router.delete("/inv/:productId");

router.get("/inv");
router.get("/inv/:productId");

export default router;
