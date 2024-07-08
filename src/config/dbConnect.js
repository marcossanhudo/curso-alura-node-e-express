import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://marcos:marcos@learning-environment.dqqvcyi.mongodb.net/livraria?retryWrites=true&w=majority&appName=learning-environment");
    return mongoose.connection;
};

export default conectaNaDatabase;