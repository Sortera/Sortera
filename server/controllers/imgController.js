const path = require('path');
const fs = require('fs');
const { zip } = require('zip-a-folder');

const imgController = {};
const formData = require('express-form-data')

// imgController.addTagg

 
imgController.addTaggedImages = (req, res, next) => {
    console.log('in add images')
    console.log('req.body', req.body)
    const files = Object.values(req.files);
    // const urls = req.body[0];
    console.log('files' ,files)
    // fs.mkdirSync('/taggedPhotoFolder')
    fs.mkdirSync(path.join(__dirname , '/taggedPhotoFolder'), { recursive: true }, (err) => {
        if (err) console.log(err);
      });
     
    files.forEach((file, idx) => {
    console.log('file is', file)
    const oldFileName = Object.values(file)[0].originalFilename;
    const newFileName = Object.values(file)[0].fieldName;
    const filePath = Object.values(file)[0].path;
    console.log('old: ', oldFileName, 'new: ', newFileName);
    // const dir = path.dirname(Object.values(file).values[0].fieldName);
    // console.log('in loop Dir', Object.values(file).values[0].fieldName);
    // console.log(file, dir + "/" + urls[idx]);
    // fs.renameSync(oldFileName, newFileName, err => {
    //   console.log('err from renameSync: ', err);
    // });
    // file = JSON.stringify(file)    
    fs.writeFileSync(__dirname + '/taggedPhotoFolder/' + newFileName, file, err => {
      console.log('err from writeFileSync: ', err);
    });
    // const stat = fs.statSync(filePath);
    // res.writeHead(200, {
    //   'Content-Type' : 'image/png',
    // });
    // fs.createReadStream(filePath).pipe(res);
  });

    //now zip that folder and send the zip somewhere
    class ZipAFolder {
 
        static async main() {
            const response = await zip(__dirname + '/taggedPhotoFolder', __dirname + '/zippedFile.zip');
            console.log('response', response)
        }
    }
    console.log('before await zipp')
    ZipAFolder.main();
    return next();
}

module.exports = imgController;