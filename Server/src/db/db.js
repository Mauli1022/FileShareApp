import mongoose from 'mongoose'

const dbName = 'FileSharingApp' 
export async function DBConnection(){
    try {
        const dbConnet = await mongoose.connect(`${process.env.DB_URL}/${dbName}`)
        console.log(`DB CONNECT || DB HOST : ${dbConnet.connection.host}`);
    } catch (error) {
        console.error(`Error While Connection With DataBase ${error}`);
    }

} 