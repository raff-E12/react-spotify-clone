## React-Spotify-Clone - Full Stack Project

Questo è un progetto **Fullstack** ispirato a **Spotify**, con funzionalità avanzate che permettono la gestione personalizzata di **album** e **brani musicali** tramite un'interfaccia **admin** collegata a un **database esterno**.

## 🚀 Funzionalità principali

- 🎧 Interfaccia utente ispirata a Spotify
- 📁 Visualizzazione di album e tracce musicali
- 🛠️ Area Admin per:
  - Aggiunta, modifica e rimozione di album
  - Caricamento di nuove tracce audio
  - Gestione metadati musicali (titolo, artista, copertina, album e colore di Sfondo)
- 💾 Integrazione con database esterno per la memorizzazione dei contenuti

## 🛠️ Tech Stack

### Frontend
- React
- TailwindCSS
- React-Router
- Axios per le richieste API

### Backend
- Node.js + Express
- API RESTful per la comunicazione frontend/backend
- Middleware com Multer

### Database
- MongoDB
- ORM/ODM: Mongoose (Usato per MangoDB)

### Storage
- Cloud Storage: uso di Cloudinary, per i file audio e le immagini degli album

## 🖥️ Installazione locale

Comandi Principali per Eseguire la configurazione del Progetto:

```bash
git clone https://github.com/tuo-utente/spotify-clone.git
cd spotify-clone

# Per il backend
cd server
npm install

# Per il frontend
cd ../client
npm install

# Backend
cd server
npm run dev

# Frontend
cd ../client
npm run dev
```

## Nota:
Devi utilizzare un file ".env" con le chiavi usate dal cloud e dal database con l'interazione backend:

```
# Connessione al database MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

# Cloudinary per l'upload di immagini e tracce audio
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_SECRET_KEY=your-secret-key
```
Un altra cosa importante questo è un progetto di allenamento sulle mie skill di integrazione di backend la prima volta, quindi ho studiato a fondo il codice per avere un idea chiara su come interagire con il backend integrato con il frontend, anche sto ancora sperimentando sintassi nuove da imparare di più. Buona visualizzazione del codice :).