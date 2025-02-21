import express from "express";
import {addField, deleteField, getField, updateField} from "../controllers/fieldController";

const router = express.Router();

router.post("/post/field", addField );
router.get("/get/field", getField);
router.put("/field/:id", updateField);
router.delete("/field/:id", deleteField);

export default router;