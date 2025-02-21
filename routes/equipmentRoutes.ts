import express from "express";
import {addEquipment, deleteEquipment, getEquipment, updateEquipment} from "../controllers/equipmentController";

const router = express.Router();

router.post("/post/equipment", addEquipment );
router.get("/get/equipment", getEquipment);
router.put("/equipment/:id", updateEquipment);
router.delete("/equipment/:id", deleteEquipment);

export default router;