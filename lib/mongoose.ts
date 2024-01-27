import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGO_URI)
        return console.log("Mongo URI not found");

    if(isConnected)
        return console.log("Already connected to DB");

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log("Connected to DB");
    } catch (error: any) {
        throw new Error(`Failed to connect to DB: ${error.message}`);
    }
}