import express from "express";
import {addLog, deleteLog, getLog, updateLog} from "../controllers/logController";

const router = express.Router();

router.post("/post/log", addLog );
router.get("/get/log", getLog);
router.put("/log/:id", updateLog);
router.delete("/log/:id", deleteLog);

export default router;