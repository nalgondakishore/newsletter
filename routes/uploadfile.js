
var BSON = require('bson').BSONPure;
var binary = require('binary');
var body = require('body-parser');
var fs = require('fs');
var multer = require('multer');

//var storage = multer.diskStorage({
//    destination: function (req, file, callback) {
//        callback(null, '/upload/');
//    },
//    filename: function (req, file, callback) {
//        callback(null, file.fieldname + '-' + Date.now());
//    }
//});

////var upload = multer({ storage : storage }).single('image');

var upload = multer({
    dest: 'uploads/', fileFilter: function (req, file, cb) {
        console.log('file is', file)
        cb(null, true);
    }
}).single('csv');

exports.upload = function (req, res) {
    upload(req, res, function (err) {
        console.log(req.file.path);
       
                if (err) {
                    return res.end("Error uploading file.");
                }
                res.end("File is uploaded");
            });
      
};