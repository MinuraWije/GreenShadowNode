import {Request, Response} from "express";
import * as vehicleService from "../services/vehicleService"

export const addVehicle  = async(req: Request, res: Response) => {
    try{
        await vehicleService.addVehicle(req.body);
        res.status(201).json({message: 'Vehicle added successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to addVehicle " + error});
    }
};

export const deleteVehicle = async(req: Request, res: Response) => {
    try{
        await vehicleService.deleteVehicle(req.params.id);
        res.json({message: 'Vehicle deleted successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to deleteVehicle " + error});
    }
};

export const updateVehicle = async(req: Request, res: Response) => {
    try{
        await vehicleService.updateVehicle(req.params.id,req.body);
        res.json({message: 'Vehicle updated successfully.'});
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