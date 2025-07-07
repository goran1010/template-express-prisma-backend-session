import { Router } from "express";
const apiRouter = Router();
import apiController from "../controllers/apiController.js";

apiRouter.get("/", apiController);

apiRouter.use((req, res) => {
  res.status(404).json("No page found");
});

export default apiRouter;
