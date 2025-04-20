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
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`; //Calcolo della durata in secondi
        // console.log("Name:",  name, "Description", desc, "Album:", album, "AudioFile", audioFile, "SourceFile-Img:", imageFile, "Upload-Audio:", audioUpload, "Upload-Img:", imageUpload);

        const songData = { // Raggruppamento delle risorse raccolte in un oggetto corrispondenti allo schema.
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        const song = SongModel(songData); // Esportazione delle risorse ottenute corrispondenti allo schema ottenuto nel invio di dati.
        await song.save(); // Salvataggio delle risorse nel database.

        return res.status(200).json({msg: "Success Trasfer Database.", status: 200}); // Stato di risposta.

    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "Not Success Trasfer to Database", status:400});
    }
}

const listSong = async (req, res) => {
    try {
        const allSongs = await SongModel.find({}); // Esportazione della collezione creata all'interno del database.
        res.status(200).json({msg: "Success Song Find!!", status:200, result: allSongs});
    } catch (error) {
        console.log(error);
        res.status(404).json({msg: "The Object is Empty!!", status: 404});
    }
}

const removeSong = async (req, res) =>{
    try {
       const body_id = req.body.id;
       await SongModel.findByIdAndDelete(body_id);
       return res.status(200).json({msg: "Song is Removing to the collection !!", status: 200});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "Song is not Removing to the collection !!", status: 404});
    }
}

export {addSong, listSong, removeSong}