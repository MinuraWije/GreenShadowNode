import express from "express";
import {addStaff, deleteStaff, getStaff, updateStaff} from "../controllers/staffController";

const router = express.Router();

router.post('/post/staff', addStaff);
router.put('/staff/:id', updateStaff);
router.delete('/staff/:id', deleteStaff);
router.get('/get/staff', getStaff);

export default router;