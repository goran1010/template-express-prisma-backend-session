import { Router } from "express";
const indexRouter = Router();
import indexController from "../controllers/indexController.js";

indexRouter.get("/", indexController);

indexRouter.use((req, res) => {
  res.status(404).json("No page found");
});

export default indexRouter;
