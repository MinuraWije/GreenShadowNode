import express from "express";
import {addCrop, deleteCrop, getCrop, updateCrop} from "../controllers/cropController";

const router = express.Router();

router.post("/post/crop", addCrop );
router.get("/get/crop", getCrop);
router.put("/crop/:id", updateCrop);
router.delete("/crop/:id", deleteCrop);

export default router;