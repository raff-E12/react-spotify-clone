
import { addSong, listSong, removeSong } from "../controllers/songController.mjs";
import express from "express"
import upload from "../middlewares/multer.mjs";

let songRouter = express.Router();

// Gestione delle Route nelle seguenti richieste http con il database.
// il metodo "fields" gestisce il caricamento di più file nelle sezione indicate con il maxcount indicato.
songRouter.post("/add", upload.fields([{name:"image", maxCount:1}, {name: "audio", maxCount:1}]), addSong);
songRouter.get("/list", listSong);
songRouter.post("/remove", upload.single("file"), removeSong); // Separazione dei campi file al campo di testo con multer.
// RECAP:
// req.body = valori di testo.
// req.file = valori di file.

export default songRouter