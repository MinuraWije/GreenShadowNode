import {UploadedFile} from "express-fileupload";
import {Request} from "express";

export function extractImg(req: Request) {
    const image = req.files?.img as UploadedFile
    const imageBuffer = image ? image.data : Buffer.alloc(0)
    return imageBuffer.toString("base64")
}
