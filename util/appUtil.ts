import {UploadedFile} from "express-fileupload";


export function extractImg(req: Request) {
    const image = req.files?.img as UploadedFile
    const imageBuffer = image ? image.data : Buffer.alloc(0)
    return imageBuffer.toString("base64")
}
