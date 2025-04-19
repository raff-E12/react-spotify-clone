
import { v2 as cloudinary } from "cloudinary"

// Configurazione di cloudinary per la sua implementazione con il backend.
// "as" -> significa rinominazione del modulo.
// Cloudinary - " un servizio cloud-based per la gestione di immagini e video".

const connectCloudinary = async () =>{
    await cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })
}

export default connectCloudinary