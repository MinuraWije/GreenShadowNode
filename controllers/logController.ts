import {Request, Response} from "express";
import * as logService from "../services/logService";
import {extractImg} from "../util/appUtil";
import {Log} from "../models/Log";

export const addLog  = async(req: Request, res: Response) => {
    const log:Log = req.body;
    log.img = extractImg(req);
    try{
        const saveLog = await logService.addLog(log);
        res.status(201).json(saveLog);
    }catch (error){
        res.status(500).json({error: "Failed to add log " + error});
    }
};

export const deleteLog = async(req: Request, res: Response) => {
    try{
        const deleteLog = await logService.deleteLog(req.params.id);
        res.json(deleteLog);
    }catch (error){
        res.status(500).json({error: "Failed to delete log " + error});
    }
};

export const updateLog = async(req: Request, res: Response) => {
    const log:Log = req.body;
    log.img = extractImg(req);
    try{
        const updateLog = await logService.updateLog(req.params.id,log);
        res.status(200).json(updateLog);
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