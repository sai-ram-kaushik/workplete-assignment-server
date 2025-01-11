import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `mongodb connection successful! DB HOST - ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("mongodb connection failed", error);
    }
};

export default connectDB;
