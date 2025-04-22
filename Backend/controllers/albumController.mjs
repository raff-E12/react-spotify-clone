import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.mjs";

const addAlbum= async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});

        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData);
        await album.save();

        return res.status(200).json({msg: "Album is Added", status: 200});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Album is not Added", status: 500});
    }
}

const listAlbum= async (req, res) => {
    try {
        const all_album = await albumModel.find({});
        return res.status(200).json({msg: "The List Album", status: 200, list: all_album});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: "Communication has been interrupted", status: 500});
    }
}

const removeAlbum= async (req, res) => {
    try {
        const value_id = req.body.id;
        await albumModel.findByIdAndDelete(value_id);
        return res.status(200).json({msg: "Album is Removed", status: 200});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: "Invalid parameter value", status: 400});
    }
}

export { addAlbum, listAlbum, removeAlbum}