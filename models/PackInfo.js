const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PackInfoSchema = new Schema({
	packFileName: {
		type: String,
		trim: true,
		required: 'Enter a filename',
	},
	title: {
		type: String,
		trim: true,
		required: 'Enter a title',
	},
	artist: {
		type: String,
		trim: true,
		required: 'Enter an artist',
	},
	overview: {
		type: String,
		trim: true,
		required: 'Enter an artist',
	},
	audioSrc: {
		type: String,
		trim: true,
		required: 'Enter a src',
	},
	// tracks: [
	// 	{
	// 		type: String,
	// 		trim: true,
	// 		required: 'Enter a track',
	// 	},
	// ],
});

const PackInfo = mongoose.model('PackInfo', PackInfoSchema);

module.exports = PackInfo;
