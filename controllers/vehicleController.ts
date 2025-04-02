import {Request, Response} from "express";
import * as vehicleService from "../services/vehicleService"

export const addVehicle  = async(req: Request, res: Response) => {
    try{
        const saveVehicle = await vehicleService.addVehicle(req.body);
        res.status(201).json(saveVehicle);
    }catch (error){
        res.status(500).json({error: "Failed to addVehicle " + error});
    }
};

export const deleteVehicle = async(req: Request, res: Response) => {
    try{
        const deleteVehicle= await vehicleService.deleteVehicle(req.params.id);
        res.json(deleteVehicle);
    }catch (error){
        res.status(500).json({error: "Failed to deleteVehicle " + error});
    }
};

export const updateVehicle = async(req: Request, res: Response) => {
    try{
        const updateVehicle = await vehicleService.updateVehicle(req.params.id,req.body);
        res.json(updateVehicle);
    }catch (error){
        res.status(500).json({error: "Failed to updateVehicle " + error});
    }
}

export const getVehicle = async(req: Request, res: Response) => {
    try{
        const vehicles = await vehicleService.getVehicles();
        res.json({vehicles});
    }catch (error){
        res.status(500).json({error: "Failed to getVehicles " + error});
    }
}