import {PrismaClient} from "@prisma/client";
import Vehicle from "../models/Vehicle";
import {Equipment} from "../models/Equipment";
import {Log} from "../models/Log";
import {Staff} from "../models/Staff";
import {Field} from "../models/Field";
import {Crop} from "../models/Crop";

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
                img: l.img,
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
                img: l.img,
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

export async function FieldAdd(f: Field) {
    try{
        const newField = await prisma.field.create({
            data:{
                code: f.code,
                name: f.name,
                location: f.location,
                size: f.size,
                img: f.img,
            }
        });
    }catch(err){
        console.log("Error adding field :",err);
    }
}

export async function FieldUpdate(code: string ,f: Field) {
    try {
        await prisma.field.update({
            where: {code: code},
            data: {
                name: f.name,
                location: f.location,
                size: f.size,
                img: f.img,
            }
        })
    }catch(err){
        console.log("Error updating field",err);
    }
}

export async function FieldDelete(code: string) {
    try{
        await prisma.field.delete({
            where: {code: code},
        });
    }catch(err){
        console.log("Error deleting field",err);
    }
}

export async function FieldGet() {
    try{
        return await prisma.field.findMany();
    }catch(err){
        console.log("Error getting all fields",err);
    }
}

export async function CropAdd(c: Crop) {
    try{
        const newCrop = await prisma.crop.create({
            data:{
                code: c.code,
                name: c.name,
                scientificName: c.scientificName,
                category: c.category,
                img: c.img,
                season: c.season,
                fieldCode: c.fieldCode,
            }
        });
    }catch(err){
        console.log("Error adding crop :",err);
    }
}

export async function CropUpdate(code: string ,c: Crop) {
    try {
        await prisma.crop.update({
            where: {code: code},
            data: {
                name: c.name,
                scientificName: c.scientificName,
                category: c.category,
                img: c.img,
                season: c.season,
                fieldCode: c.fieldCode,
            }
        })
    }catch(err){
        console.log("Error updating crop",err);
    }
}

export async function CropDelete(code: string) {
    try{
        await prisma.crop.delete({
            where: {code: code},
        });
    }catch(err){
        console.log("Error deleting crop",err);
    }
}

export async function CropGet() {
    try{
        return await prisma.crop.findMany();
    }catch(err){
        console.log("Error getting all crops",err);
    }
}