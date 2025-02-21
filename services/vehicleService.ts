import Vehicle from "../models/Vehicle";
import {VehicleAdd, VehicleDelete, VehicleGet, VehicleUpdate} from "../database/prisma-data-store";

export const addVehicle = async(vehicle: Vehicle) => {
    return await VehicleAdd(vehicle);
};

export const deleteVehicle = async(vehicleId: string) => {
    return await VehicleDelete(vehicleId);
};

export const getVehicles = async() => {
    return await VehicleGet();
}

export const updateVehicle = async(vehicleId: string,vehicle:Vehicle) => {
    return await VehicleUpdate(vehicleId,vehicle);
};