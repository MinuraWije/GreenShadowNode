import {StaffAdd, StaffDelete, StaffGet, StaffUpdate} from "../database/prisma-data-store";
import {Staff} from "../models/Staff";

export const addStaff = async(staff: Staff) => {
    return await StaffAdd(staff);
};

export const deleteStaff = async(staffId: string) => {
    return await StaffDelete(staffId);
};

export const getStaffs = async() => {
    return await StaffGet();
}

export const updateStaff = async(staffId: string,staff: Staff) => {
    return await StaffUpdate(staffId,staff);
};