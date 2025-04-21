import { addAlbum, listAlbum, removeAlbum } from "../controllers/albumController.mjs";
import express from "express"
import upload from "../middlewares/multer.mjs";

// Ripetizione per la stessa identica route.
const albumRoute = express.Router();

albumRoute.post("/add", upload.single("image"), addAlbum); // Gestione di un singola parametro in multer.
albumRoute.get("/list", listAlbum)
albumRoute.post("/remove", upload.single("file"),removeAlbum);

export default albumRoute