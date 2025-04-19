// Iniziazione del server con Express

import express from "express"
import cors from "cors"
import "dotenv/config"
import songRouter from "./routes/songRoute.mjs";
import connectDB from "./config/mongodb.mjs";
import connectCloudinary from "./config/cloudinary_config.mjs";

const app = express();
const port = process.env.PORT || 4000;
// Connessione al database e al cloud.
connectDB();
connectCloudinary();


app.use(express.json());
// Implementazione del CORS in richieste di un altro dominio.
app.use(cors());
app.use("/api/song", songRouter);

app.get("/", (req, res) => {
    return res.status(200).json({msg: "Api Working", status: 200});
})

app.listen(port, () => { return console.log(`>> Server started on http://localhost:${port}`)})