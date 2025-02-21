import {EquipmentAdd, EquipmentDelete, EquipmentGet, EquipmentUpdate} from "../database/prisma-data-store";
import {Equipment} from "../models/Equipment";

export const addEquipment = async(equipment: Equipment) => {
    return await EquipmentAdd(equipment);
};

export const deleteEquipment = async(equipmentId: string) => {
    return await EquipmentDelete(equipmentId);
};

export const getEquipments = async() => {
    return await EquipmentGet();
}

export const updateEquipment = async(equipmentId: string,equipment: Equipment) => {
    return await EquipmentUpdate(equipmentId,equipment);
};