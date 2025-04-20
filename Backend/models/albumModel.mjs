
import mongoose from "mongoose";

// lo principio si applica agli altri modelli della collezione.
// Errore: lo schema è assoluto quando lo si aggiunge a una nuova collezione.

const albumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    bgColour: {type: String, required: true},
    image: {type: String, required: true},
})

const albumModel = mongoose.models.album || mongoose.model("album", albumSchema);

export default albumModel