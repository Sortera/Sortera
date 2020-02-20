const path = require('path');
const fs = require('fs');
const { zip } = require('zip-a-folder');

const imgController = {};

imgController.addTaggedImages = (req, res, next) => {
  console.log('in add images');
  const files = Object.values(req.files);
  const urls = req.urls;
  console.log(values);
  fs.mkdir('sorteraSortedPhotos', { recursive: true });
  files.forEach((file, idx) => {
    const dir = path.dirname(file);
    console.log(file, dir + "/" + urls[idx]);
    fs.renameSync(file, dir + "/" + urls[idx]);
    fs.writeFileSync(__dirname + '/sorteraSortedPhotos', dir + "/" + urls[idx]);
  });
  //now zip that folder and send the zip somewhere
  class ZipAFolder {
    static async main() {
      await zip('/sorteraSortedPhotos', '/zippedFile.zip');
    }
  }
  ZipAFolder.main();
  // Create a readable stream that we can pipe to the response object
  let readStream = fs.createReadStream('/zippedFile.zip');
  // When everything has been read from the stream, end the response
  readStream.on('close', () => res.end());
  // Pipe the contents of the readStream directly to the response
  readStream.pipe(res.locals.zippedFolder);
  return next();
}

module.exports = imgController;