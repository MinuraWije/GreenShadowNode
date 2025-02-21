import {LogAdd, LogDelete, LogGet, LogUpdate} from "../database/prisma-data-store";
import {Log} from "../models/Log";

export const addLog = async(log: Log) => {
    return await LogAdd(log);
};

export const deleteLog = async(logId: string) => {
    return await LogDelete(logId);
};

export const getLogs = async() => {
    return await LogGet();
}

export const updateLog = async(logId: string,log:Log) => {
    return await LogUpdate(logId,log);
};