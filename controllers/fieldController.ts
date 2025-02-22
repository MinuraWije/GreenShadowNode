import {Request, Response} from "express";
import * as fieldService from "../services/fieldService";
import {extractImg} from "../util/appUtil";
import {Field} from "../models/Field";

export const addField  = async(req: Request, res: Response) => {
    const field:Field = req.body;
    field.img = extractImg(req);
    try{
        await fieldService.addField(field);
        res.status(201).json({message: 'Field added successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to add field " + error});
    }
};

export const deleteField = async(req: Request, res: Response) => {
    try{
        await fieldService.deleteField(req.params.id);
        res.json({message: 'Field deleted successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to delete field " + error});
    }
};

export const updateField = async(req: Request, res: Response) => {
    const field:Field = req.body;
    field.img = extractImg(req);
    try{
        await fieldService.updateField(req.params.id,field);
        res.json({message: 'Field updated successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to update field " + error});
    }
}

export const getField = async(req: Request, res: Response) => {
    try{
        const fields = await fieldService.getFields();
        res.json({fields: fields});
    }catch (error){
        res.status(500).json({error: "Failed to get fields " + error});
    }
}