import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://marcos:<password>@learning-environment.dqqvcyi.mongodb.net/livraria?retryWrites=true&w=majority&appName=learning-environment");
    return mongoose.connection;
};

export default conectaNaDatabase;