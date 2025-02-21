import {PrismaClient} from "@prisma/client";
import Vehicle from "../models/Vehicle";
import {Equipment} from "../models/Equipment";
import {Log} from "../models/Log";
import {Staff} from "../models/Staff";

const prisma = new PrismaClient();

export async function VehicleAdd(v: Vehicle) {
    try{
        const newVehicle = await prisma.vehicle.create({
            data:{
                code: v.code,
                licensePlate: v.licensePlate,
                category: v.category,
                fuelType: v.fuelType,
                vehicleStatus: v.vehicleStatus,
            }
        });
    }catch(err){
        console.log("Error adding vehicle",err);
    }
}

export async function VehicleUpdate(code: string ,v: Vehicle) {
    try {
        await prisma.vehicle.update({
            where: {code: code},
            data: {
                licensePlate: v.licensePlate,
                category: v.category,
                fuelType: v.fuelType,
                vehicleStatus: v.vehicleStatus,
            }
        })
    }catch(err){
        console.log("Error updating vehicle",err);
    }
}

export async function VehicleDelete(code: string) {
    try{
        await prisma.vehicle.delete({
            where: {code: code},
        });
    }catch(err){
        console.log("Error deleting vehicle",err);
    }
}

export async function VehicleGet() {
    try{
        return await prisma.vehicle.findMany();
    }catch(err){
        console.log("Error getting all vehicles",err);
    }
}

export async function EquipmentAdd(e: Equipment) {
    try{
        const newEquipment = await prisma.equipment.create({
            data:{
                id: e.id,
                name: e.name,
                type: e.type,
                status: e.status,
            }
        });
    }catch(err){
        console.log("Error adding equipment :",err);
    }
}

export async function EquipmentUpdate(id: string ,e: Equipment) {
    try {
        await prisma.equipment.update({
            where: {id: id},
            data: {
                name: e.name,
                type: e.type,
                status: e.status,
            }
        })
    }catch(err){
        console.log("Error updating equipment",err);
    }
}

export async function EquipmentDelete(id: string) {
    try{
        await prisma.equipment.delete({
            where: {id: id},
        });
    }catch(err){
        console.log("Error deleting equipment",err);
    }
}

export async function EquipmentGet() {
    try{
        return await prisma.equipment.findMany();
    }catch(err){
        console.log("Error getting all equipments",err);
    }
}

export async function LogAdd(l: Log) {
    try{
        const newLog = await prisma.log.create({
            data:{
                code: l.code,
                details: l.details,
                date: l.date,
                observedImg: l.observedImg,
            }
        });
    }catch(err){
        console.log("Error adding log :",err);
    }
}

export async function LogUpdate(code: string ,l: Log) {
    try {
        await prisma.log.update({
            where: {code: code},
            data: {
                details: l.details,
                date: l.date,
                observedImg: l.observedImg,
            }
        })
    }catch(err){
        console.log("Error updating log",err);
    }
}

export async function LogDelete(code: string) {
    try{
        await prisma.log.delete({
            where: {code: code},
        });
    }catch(err){
        console.log("Error deleting log",err);
    }
}

export async function LogGet() {
    try{
        return await prisma.log.findMany();
    }catch(err){
        console.log("Error getting all logs",err);
    }
}

export async function StaffAdd(s: Staff) {
    try{
        const newStaff = await prisma.staff.create({
            data:{
                id: s.id,
                name: s.name,
                role: s.role,
                designation: s.designation,
                gender: s.gender,
                joinedDate: s.joinedDate,
                email: s.email,
                dob: s.dob,
                address: s.address,
                contactNumber: s.contactNumber,
            }
        });
    }catch(err){
        console.log("Error adding Staff :",err);
    }
}

export async function StaffUpdate(id: string ,s: Staff) {
    try {
        await prisma.staff.update({
            where: {id: id},
            data: {
                name: s.name,
                role: s.role,
                designation: s.designation,
                gender: s.gender,
                joinedDate: s.joinedDate,
                email: s.email,
                dob: s.dob,
                address: s.address,
                contactNumber: s.contactNumber,
            }
        })
    }catch(err){
        console.log("Error updating Staff",err);
    }
}

export async function StaffDelete(id: string) {
    try{
        await prisma.staff.delete({
            where: {id: id},
        });
    }catch(err){
        console.log("Error deleting staff",err);
    }
}

export async function StaffGet() {
    try{
        return await prisma.staff.findMany();
    }catch(err){
        console.log("Error getting all staffs",err);
    }
}