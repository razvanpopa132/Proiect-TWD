import express from "express";
import { connect as _connect } from "mongoose";
const app = express();

const uri = 'mongodb+srv://mydatabase:databaseadmin@proiectweb.gmrhvsn.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await _connect(uri);
        console.log("Connected to MongoDB");
    } 
    catch (error){
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});