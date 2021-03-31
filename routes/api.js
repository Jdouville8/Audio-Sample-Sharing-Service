const router = require("express").Router();
const mongoose = require("mongoose");
const multer = require("multer");
const Grid = require("gridfs-stream");
const GridFsStorage = require("multer-gridfs-storage");
const db = mongoose.connection;
const User = require("../models/User");
const PackInfo = require("../models/PackInfo");
const crypto = require("crypto");
const path = require("path");

let gfs;

db.once("open", function () {
	gfs = Grid(db.db, mongoose.mongo);
	console.log("db.once called!");
	gfs.collection("uploads");
});

const storage = new GridFsStorage({
	url: "mongodb://localhost/SampleLibrary",
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = buf.toString("hex") + path.extname(file.originalname);
				const fileInfo = {
					filename: filename,
					bucketName: "uploads",
				};
				resolve(fileInfo);
			});
		});
	},
});

// sets file input to single file
const singleUpload = multer({ storage: storage }).single("file");

router.get("/api/files/:filename", (req, res) => {
	gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
		if (!files || files.length === 0) {
			return res.status(404).json({
				message: "Could not find file",
			});
		}
		var readstream = gfs.createReadStream({
			filename: files[0].filename,
		});
		res.set("Content-Type", files[0].contentType);
		return readstream.pipe(res);
	});
});

router.get("/api/files", (req, res) => {
	gfs.files.find({}).toArray((err, files) => {
		// console.log(formData);
		if (!files || files.length === 0) {
			return res.status(404).json({
				message: "Could not find files",
			});
		}
		return res.json(files);
	});
});

router.post("/api/files", singleUpload, (req, res) => {
	console.log(req.body);
	if (req.file) {
		return res.json({
			success: true,
			file: req.file,
		});
	}
	res.send({ success: false });
});

router.delete("/api/files/:id", (req, res) => {
	gfs.remove({ _id: req.params.id }, (err) => {
		if (err) return res.status(500).json({ success: false });
		return res.json({ success: true });
	});
});

// Pack Info Routes
router.post("/api/packinfo", ({ body }, res) => {
	PackInfo.create(body)
		.then((dbPackInfo) => {
			res.json(dbPackInfo);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// User Routes
router.post("/api/users", ({ body }, res) => {
	User.create(body)
		.then((dbUser) => {
			res.json(dbUser);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get("/api/users", (req, res) => {
	User.find({})
		.then((dbUsers) => {
			res.json(dbUsers);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
