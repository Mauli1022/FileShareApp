import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
    Path : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    downloadContent : {
        type : Number,
        required : true,
        default : true
    }
})

export const File = mongoose.model("File",fileSchema)