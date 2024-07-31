import express from "express";
import { addLeadData } from "../controllers/formController.js";
const router = express.Router();

router.post("/", addLeadData);

export default router;
