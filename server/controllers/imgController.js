const path = require('path');
const fs = require('fs');
const axios = require('axios');
// const http = require('http');
const http = require('http-request');
const { zip } = require('zip-a-folder');
const bufferFrom = require('buffer-from');

const imgController = {};
const formData = require('express-form-data')

// imgController.addTagg

 
imgController.addTaggedImages = (req, res, next) => {
  console.log('in add images');
  console.log('req.body: ', req.body);
  const files = Object.values(req.files);
  // const urls = req.body[0];
  console.log('files: ' ,files);
  res.locals.files = files;
  res.locals.paths = files.map(file => Object.values(file)[0].path);
  // fs.mkdirSync('/taggedPhotoFolder');
  fs.mkdirSync(path.join(__dirname , '/taggedPhotoFolder'), { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  // console.log('values', files.values());
  // let key1  = files.get('1');
  // let key2 = files.get('0');
  // console.log('ley1, 2' , key1, key2);
  async function download(imageUrl, newFileName) {
    console.log('imageURL: ', imageUrl);
    const url = imageUrl;
    const path = __dirname + '/taggedPhotoFolder/' + newFileName;
    console.log('path: ', path);
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    });
    // once we get the response, pipe the readable stream to a write stream
    response.data.pipe(fs.createWriteStream(path));
    // return a promise that can be awaited
    return new Promise((resolve, reject) => {
      // listen for events on the readable stream: the download will either be successful or failing
      response.data.on('end', () => {
        resolve();
      });
      response.data.on('error', err => {
        reject(err);
      });
    })
  }

  download('https://miro.medium.com/max/1316/1*URHYGBQMuu9UWc4zEVFGPw.gif', 'example.png');

  async function getBase64(url) {
    return await axios
      .get(url, {
        responseType: 'arraybuffer'
      })
      .then(response => Buffer.from(response.data, 'binary').toString('base64'))
  }

  files.forEach((file, idx) => {
    console.log('in file')
    // console.log('in here: ', Object.values(file)[0]);
    const oldFileName = Object.values(file)[0].originalFilename;
    const newFileName = Object.values(file)[0].fieldName;
    const path = Object.values(file)[0].path;
    // download(imageUrl, newFileName);
    // const url = URL.createObjectURL(file);
    // console.log('what url?: ', url);

    console.log('old: ', oldFileName, 'new: ', newFileName);
    console.log('hope: ', getBase64(path));
    // const dir = path.dirname(Object.values(file).values[0].fieldName);
    // console.log('in loop Dir', Object.values(file).values[0].fieldName);
    // console.log(file, dir + "/" + urls[idx]);
    // fs.renameSync(oldFileName, newFileName, err => {
    //   console.log('err from renameSync: ', err);
    // });



    // http.get({ path }, res => {
    //   const imagedata = '';
    //   res.setEncoding('binary');
    //   res.on('data', chunk => {
    //     imagedata += chunk;
    //   });
    //   res.on('end', () => {
    //     fs.writeFile(newFileName, imagedata, 'binary', function(err){
    //       if (err) throw err
    //       console.log('File saved.')
    //     });
    //   });
    // });

    // http.get({ url: path, port: 8080 }, path, function (error, result) {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log('File downloaded at: ' + result.file);
    //   }
    // });

    const buf = Buffer.from(file, 'base64');
    console.log('buf: ', buf)
    // semi-working:
    fs.writeFileSync(__dirname + '/taggedPhotoFolder/' + newFileName, file, err => {
      console.log('err from writeFileSync: ', err);
    });
    // fs.readFile(file, 'binary', function(err, original_data){
    //   fs.writeFile('image_orig.jpg', original_data, 'binary', function(err) {});
    //   var base64Image = new Buffer(original_data, 'binary').toString('base64');
    //   var decodedImage = new Buffer(base64Image, 'base64').toString('binary');
    //   fs.writeFile('image_decoded.jpg', decodedImage, 'binary', function(err) {});
    // });
  });



  //now zip that folder and send the zip somewhere
  class ZipAFolder {
    static async main() {
      const response = await zip(__dirname + '/taggedPhotoFolder', __dirname + '/zippedFile.zip');
      console.log('response', response);
    }
  }
  console.log('before await zipp');
  ZipAFolder.main();

  // // Create a readable stream that we can pipe to the response object
  // let readStream = fs.createReadStream('/zippedFile.zip');
  // // When everything has been read from the stream, end the response
  // readStream.on('close', () => res.end());
  // // Pipe the contents of the readStream directly to the response
  // readStream.pipe(res.locals.zippedFolder);

  return next();
}

module.exports = imgController;