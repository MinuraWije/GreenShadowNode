import {Request, Response} from "express";
import * as staffService from "../services/staffService"

export const addStaff  = async(req: Request, res: Response) => {
    try{
        await staffService.addStaff(req.body);
        res.status(201).json({message: 'Staff added successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to addStaff " + error});
    }
};

export const deleteStaff = async(req: Request, res: Response) => {
    try{
        await staffService.deleteStaff(req.params.id);
        res.json({message: 'Staff deleted successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to deleteStaff " + error});
    }
};

export const updateStaff = async(req: Request, res: Response) => {
    try{
        await staffService.updateStaff(req.params.id,req.body);
        res.json({message: 'Staff updated successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to updateStaff " + error});
    }
}

export const getStaff = async(req: Request, res: Response) => {
    try{
        const staffs = await staffService.getStaffs();
        res.json({staffs:staffs});
    }catch (error){
        res.status(500).json({error: "Failed to getStaffs " + error});
    }
}