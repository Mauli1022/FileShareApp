import { File } from "../Models/File.models.js";
// 
export async function uploadImage(req,res){
    
    const fileObj = {
        Path : req.file.path,
        Name : req.file.originalname
    }
    // console.log(fileObj);

    try {
       const file = await File.create(fileObj)
       
       console.log(file);
       return res.status(200).json({
        path : `http://localhost:8000/File/${file._id}`
       })
    } catch (error) {
        console.error(`Error While Storing File : ${error.message}`);
        res.status(500).json({error : error.message})
    }
}

export async function downloadImage(req,res){

    try {
        const myFile = await File.findById(req.params.fileId)
        myFile.downloadContent++
        await myFile.save()

        res.download(myFile.Path,myFile.Name)
    } catch (error) {
        console.log(`Error While Getting the File : ${error}`);
        return res.status(500).json({error : error.message})

    }
}
/*
difference between query and param
 */