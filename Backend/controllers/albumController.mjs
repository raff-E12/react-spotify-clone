import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.mjs";

const addAlbum= async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData);
        await album.save();

        return res.status(200).json({msg: "Album is Added", status: 200});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: "Album is not Added", status: 400});
    }
}

const listAlbum= async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const removeAlbum= async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export { addAlbum, listAlbum, removeAlbum}