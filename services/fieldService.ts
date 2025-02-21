import {FieldAdd, FieldDelete, FieldGet, FieldUpdate} from "../database/prisma-data-store";
import {Field} from "../models/Field";

export const addField = async(field: Field) => {
    return await FieldAdd(field);
};

export const deleteField = async(fieldId: string) => {
    return await FieldDelete(fieldId);
};

export const getFields = async() => {
    return await FieldGet();
}

export const updateField = async(fieldId: string,field:Field) => {
    return await FieldUpdate(fieldId,field);
};