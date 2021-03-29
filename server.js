const express = require("express");
const bodyParser = require('body-parser')
const path = require("path");
const crypto = require('crypto')
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const multer = require('multer')
const logger = require('morgan');
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOverride = require('method-override')
const config = require('./config');

// connect to mongoose
mongoose.connect(config.db);
/** Seting up server to accept cross-origin browser requests */
app.use(function(req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(logger('dev'));

// Put all API endpoints under '/api'
// app.use('/api', require('./routes/file'));
app.use(require("./routes/api.js"));



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);
console.log(`Server listening on ${port}`);





















// Add routes, both API and view
// Comment for prune


// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });
  
  // app.listen(PORT, () => {
  //   console.log(`🌎 ==> API server now on port ${PORT}!`);
  // });




  // TRAVERSY METHOD
  
  // // Define middleware here
  // app.use(bodyParser.json())
  // app.use(methodOverride('_method'))
  // app.use(express.urlencoded({ extended: true }));
  // app.use(express.json());
  
  // // Serve up static assets (usually on heroku)
  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static("client/build"));
  // }
  
  // const mongoURI = 'mongodb://localhost/SampleLibrary'
  
  // const conn = mongoose.createConnection(mongoURI) 
  // // || 
  // // 'mongodb://localhost/SampleLibrary',
  // //   {
  // //     useNewUrlParser: true,
  // //     useUnifiedTopology: true,
  // //     useCreateIndex: true,
  // //     useFindAndModify: false
  // //   }
  // // );
  
  // // init gfs strean
  // let gfs;
  
  // conn.once('open', () => {
  //   gfs = Grid(conn.db, mongoose.mongo)
  //   gfs.collection('uploads')
  // })
  
  // const storage = new GridFsStorage({
  //   url: mongoURI,
  //   file: (req, file) => {
  //     return new Promise((resolve, reject) => {
  //       crypto.randomBytes(16, (err, buf) => {
  //         if (err) {
  //           return reject(err);
  //         }
  //         const filename = buf.toString('hex') + path.extname(file.originalname);
  //         const fileInfo = {
  //           filename: filename,
  //           bucketName: 'uploads'
  //         };
  //         resolve(fileInfo);
  //       });
  //     });
  //   }
  // });
  // const upload = multer({ storage });