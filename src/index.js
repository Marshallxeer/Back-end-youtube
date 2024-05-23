import mongoose from "mongoose";
import { DB_NAME } from './constants.js';
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express()
// import dotenv from "dotenv"
// import connectDB from "./db/index.js";

//  dotenv.config({
//     path: "./.env",
// })

// connectDB();

try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
    app.on("error", () => {
        console.log("ERROR:", error);
        throw error;
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
} catch (error) {
    console.error("ERROR :", error);
    throw error
}
