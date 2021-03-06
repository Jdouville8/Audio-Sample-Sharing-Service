const express = require('express');
const bodyParser = require('body-parser');
const stripe = require("stripe")('pk_test_51IbyXTGpEScSSzwXh44D5mrHcdtU3kD902kW87kXDu1RIkJco8MEujFZtgG0C49nFMIODD1QWWOYdkgmF8VbtnR400lPNyG32Q')
const path = require('path');
const crypto = require('crypto');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const logger = require('morgan');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const config = require('./config');
const cors = require('cors')


const connectionParams = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
};

// connect to mongoose
mongoose.connect(config.db, connectionParams);
/** Seting up server to accept cross-origin browser requests */
app.use(function (req, res, next) {
	//allow cross origin requests
	res.setHeader(
		'Access-Control-Allow-Methods',
		'POST, PUT, OPTIONS, DELETE, GET'
	);
	res.header('Access-Control-Allow-Origin', 'https://wavmovers.herokuapp.com');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Allow-Credentials', true);
	next();
});
// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	// app.get('/*', function (req, res) {
	// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
	// });
	// app.use(express.static(path.join(__dirname, 'build')));
}

app.use(express.json());
app.use(logger('dev'));
app.use(cors())
// Put all API endpoints under '/api'
// app.use('/api', require('./routes/file'));
app.use(require('./routes'));
//
//
//
const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Server listening on ${port}`);
