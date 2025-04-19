import { v2 as cloudinary } from "cloudinary";
import SongModel from "../models/songModel.mjs";

// Creazione di struttura dei parametri dati in richiesta del client.

const addSong = async (req, res) => {
    try {
        const name = req.body.name; // 1. Campo name - testo
        const desc = req.body.desc; // 2. Campo desc - testo
        const album = req.body.album; // 3.Campo album - testo 
        const audioFile = req.files.audio[0]; // 5. Campo  audio - usato per l'estrazione file indicato
        const imageFile = req.files.image[0]; // 6. Campo immagine - usato per l'estrazione file indicato
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video"}); // Trasporto dei file su cloudnary durante la richiesta del client sui relativi dati.
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        console.log("Name:",  name, "Description", desc, "Album:", album, "AudioFile", audioFile, "SourceFile-Img:", imageFile, "Upload-Audio:", audioUpload, "Upload-Img:", imageUpload);
    } catch (error) {
        console.log(error);
    }
}

const listSong = async () => {

}

export {addSong, listSong}