import {Request, Response} from "express";
import * as logService from "../services/logService";
import {extractImg} from "../util/appUtil";
import {Log} from "../models/Log";

export const addLog  = async(req: Request, res: Response) => {
    const log:Log = req.body;
    log.img = extractImg(req);
    try{
        await logService.addLog(log);
        res.status(201).json({message: 'Log added successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to add log " + error});
    }
};

export const deleteLog = async(req: Request, res: Response) => {
    try{
        await logService.deleteLog(req.params.id);
        res.json({message: 'Log deleted successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to delete log " + error});
    }
};

export const updateLog = async(req: Request, res: Response) => {
    const log:Log = req.body;
    log.img = extractImg(req);
    try{
        await logService.updateLog(req.params.id,log);
        res.json({message: 'Log updated successfully.'});
    }catch (error){
        res.status(500).json({error: "Failed to update log " + error});
    }
}

export const getLog = async(req: Request, res: Response) => {
    try{
        const logs = await logService.getLogs();
        res.json({logs: logs});
    }catch (error){
        res.status(500).json({error: "Failed to get logs " + error});
    }
}