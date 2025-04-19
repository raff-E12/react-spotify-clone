
import mongoose from "mongoose";

// Rapprensentazione di struttura dati per il server MongoDB.
// Sotto forma di schema da utilizzare come collezione dati sul database stesso.
// Nota: Moongose si adatta sempre sul esistenza di una collezione quindi in qualsiasi caso la ricrea se non esiste.

// 1. Definizione dello schema da applicare nella collezione con i relativi campi necessari.
const SongSchema = new mongoose.Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    album: {type: String, required: true},
    image: {type: String, required: true},
    file: {type: String, required: true},
    duration: {type: String, required: true}
})

// 2. Creazione del modello con la collezione associata, oppure se è inesistente lo ricrea.
const SongModel = mongoose.models.song || mongoose.model("song", SongSchema);

export default SongModel