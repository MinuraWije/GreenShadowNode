import express from "express";
import {addVehicle,updateVehicle,deleteVehicle,getVehicle} from "../controllers/vehicleController";

const router = express.Router();

router.post("/post/vehicle", addVehicle );
router.get("/get/vehicle", getVehicle);
router.put("/vehicle/:id", updateVehicle);
router.delete("/vehicle/:id", deleteVehicle);

export default router;