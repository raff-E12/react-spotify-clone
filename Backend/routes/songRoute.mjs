
import { addSong, listSong } from "../controllers/songController.mjs";
import express from "express"
import upload from "../middlewares/multer.mjs";

let songRouter = express.Router();

// Gestione delle Route nelle seguenti richieste http con il database.
// il metodo "fields" gestisce il caricamento di più file nelle sezione indicate con il maxcount indicato.
songRouter.post("/add", upload.fields([{name:"image", maxCount:1}, {name: "audio", maxCount:1}]), addSong);
songRouter.get("/list", listSong);

export default songRouter