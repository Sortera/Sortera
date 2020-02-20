const path = require('path');
const fs = require('fs');
const { zip } = require('zip-a-folder');
const imgController = {};


 

imgController.addTaggedImages = (req, res, next) => {
    console.log('in add images')
    const files = Object.values(req.files)
    const urls = req.urls;
    console.log(values)
    fs.mkdir('taggedPhotoFolder')
    files.forEach((file, idx) => {
        var dir = path.dirname(file);
        console.log(file, dir + "/" + urls[idx])
        fs.renameSync(file, dir + "/" + urls[idx]);
        fs.writeFileSync(__dirname + '/taggedPhotoFolder', dir + "/" + urls[idx]);
    })
    //now zip that folder and send the zip somewhere
    class ZipAFolder {
 
        static async main() {
            await zip('/taggedPhotoFolder', '/zippedFile.zip');
        }
    }
    ZipAFolder.main();
  
}