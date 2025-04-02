import {Request, Response} from "express";
import * as cropService from "../services/cropService";
import {extractImg} from "../util/appUtil";
import {Crop} from "../models/Crop";

export const addCrop  = async(req: Request, res: Response) => {
    const crop:Crop = req.body;
    crop.img = extractImg(req);
    try{
        const saveCrop = await cropService.addCrop(req.body);
        res.status(201).json(saveCrop);
    }catch (error){
        res.status(500).json({error: "Failed to add crop " + error});
    }
};

export const deleteCrop = async(req: Request, res: Response) => {
    try{
        const deleteCrop = await cropService.deleteCrop(req.params.id);
        res.json(deleteCrop);
    }catch (error){
        res.status(500).json({error: "Failed to delete crop " + error});
    }
};

export const updateCrop = async(req: Request, res: Response) => {
    const crop:Crop = req.body;
    crop.img = extractImg(req);
    try{
        const updateCrop = await cropService.updateCrop(req.params.id,req.body);
        res.json(updateCrop);
    }catch (error){
        res.status(500).json({error: "Failed to update crop " + error});
    }
}

export const getCrop = async(req: Request, res: Response) => {
    try{
        const crops = await cropService.getCrops();
        res.json({crops: crops});
    }catch (error){
        res.status(500).json({error: "Failed to get crops" + error});
    }
}