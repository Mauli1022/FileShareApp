import Router from "express" 
import { uploadImage, downloadImage } from '../Controller/image.controller.js'
import upload from "../Utils/uploadFile.js"

const router = Router()

router.post('/uploads',upload.single('File'),uploadImage)
router.get(`/File/:fileId`,downloadImage);


export default router