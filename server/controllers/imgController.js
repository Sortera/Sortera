const path = require('path');
const fs = require('fs');
const { zip } = require('zip-a-folder');
const imgController = {};


 

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
    console.log('values', files.values())
    let key1  = files.get('1')
    let key2 = files.get('0')
    console.log('ley1, 2' , key1, key2)
    files.entries().forEach((file, idx) => {
        var dir = path.dirname(file);
        console.log('in loop Dir', dir)
        console.log(file, dir + "/" + urls[idx])
        fs.renameSync(file, dir + "/" + urls[idx]);
        fs.writeFileSync(__dirname + '/taggedPhotoFolder', "/" + urls[idx]);
    })

    //now zip that folder and send the zip somewhere
    class ZipAFolder {
 
        static async main() {
            const response = await zip('/taggedPhotoFolder', '/zippedFile.zip');
            console.log('response', response)
        }
    }
    console.log('before await zipp')
    ZipAFolder.main();
    return next();
}

module.exports = imgController;