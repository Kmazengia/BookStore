import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();


app.listen(process.dotenv.PORT, () => {
    console.log("server is running");
});