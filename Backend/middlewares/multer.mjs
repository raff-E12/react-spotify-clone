
import multer from "multer"

// Implementazione di Multer - libreria di Node.js utilizzato in express.
// Viene utilizzato per gestire il caricamento di un file su richiesta http.
// Con questo lo utilizziamo per come i file devono essere salvati sul disco del server.

const storage = multer.diskStorage({
    filename: function(req, file, callback){ // 1. specifica il nome verrà salvato. 
        callback(null, file.originalname) // 2. salvare i nomi dei file in formati originali.
    }
})


const upload = multer({storage}); // 3. gestione dei file caricati da multer tramite un instanza creata da Multer.

export default upload // 4. Esportazione.