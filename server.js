const express = require("express");
const bodyParser = require('body-parser')
const path = require("path");
const crypto = require('crypto')
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('multer-gridfs-stream')
const methodOverride = require('method-override')



// Define middleware here
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/SampleLibrary',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// init gfs strean
let gfs;

// Add routes, both API and view
// Comment for prune
app.use(require("./routes/api.js"));

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
