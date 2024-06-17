import mongoose, { mongo } from "mongoose";

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

export default dbCon;