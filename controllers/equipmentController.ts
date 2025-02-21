import {Request, Response} from "express";
import * as equipmentService from "../services/equipmentService";

export const addEquipment  = async(req: Request, res: Response) => {
    try{
        await equipmentService.addEquipment(req.body);
        res.status(201).json({message: 'Equipment added successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to add equipment " + error});
    }
};

export const deleteEquipment = async(req: Request, res: Response) => {
    try{
        await equipmentService.deleteEquipment(req.params.id);
        res.json({message: 'Equipment deleted successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to delete equipment " + error});
    }
};

export const updateEquipment = async(req: Request, res: Response) => {
    try{
        await equipmentService.updateEquipment(req.params.id,req.body);
        res.json({message: 'Equipment updated successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to update equipment " + error});
    }
}

export const getEquipment = async(req: Request, res: Response) => {
    try{
        const equipments = await equipmentService.getEquipments();
        res.json({equipments: equipments});
    }catch (error){
        res.status(500).json({error: "Failed to get equipments " + error});
    }
}