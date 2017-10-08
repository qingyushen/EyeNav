const express = require('express')
const app = express()
//const Vision = require('@google-cloud/vision');
var requests  = require('requests')
//var upload = multer({ dest: 'uploads/' })


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})

/*
const fs = require ('fs')

app.post('/image', upload.single('file'), function (req, res, next) {
  console.log('got image', req.file)
  // Instantiates a client
  const vision = Vision();
  // The path to the local image file, e.g. "/path/to/image.png"
   var fileName = req.file.path+'.jpg';
   var landmarks = {}
  // Performs landmark detection on the local file
  vision.landmarkDetection({ source: {filename: fileName} })
    .then((results) => {
      landmarks = results[0].landmarkAnnotations;
      console.log('Landmarks:');
      landmarks.forEach((landmark) => console.log(landmark));
    })
  .catch((err) => {
    console.error('ERROR:', err);
  });
  //console.log(Object.keys(req.body))
  res.send(landmarks)
})


app.listen(process.env.PORT, function () {
  console.log('Server up and running')
})*/



//app.post('/upload', upload.single('photo'),())
