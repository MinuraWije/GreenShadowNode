import {CropAdd, CropDelete, CropGet, CropUpdate} from "../database/prisma-data-store";
import {Crop} from "../models/Crop";

export const addCrop = async(crop: Crop) => {
    return await CropAdd(crop);
};

export const deleteCrop = async(cropId: string) => {
    return await CropDelete(cropId);
};

export const getCrops = async() => {
    return await CropGet();
}

export const updateCrop = async(cropId: string,crop:Crop) => {
    return await CropUpdate(cropId,crop);
};