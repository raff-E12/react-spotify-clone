
import mongoose from "mongoose";

// Connessione al database a MongoDB
// utilizzo di Moongose (ORM) che permette di lavorare con MongoDB in maniera dinamica.

const connectDB = async () => {
    mongoose.connection.on("connected", () =>{
        return console.log("Connection established");
    })
    return await mongoose.connect(`${process.env.MONGODB_URI}/spotify`); //connessione al database
} 

export default connectDB