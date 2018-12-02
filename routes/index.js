var express = require('express');
var router = express.Router();
var fs = require('fs');
var multpart = require('connect-multiparty');
var multipartMiddleware = multpart();

router.post('/uploader', multipartMiddleware, function(req, res) {
  var fs = require('fs');
  const dir = process.cwd();
  console.log(req.files.fileUpload.path);
  fs.readFile(req.files.fileUpload.path, function (err, data) {
      var newPath =  dir+'/public/images/' + req.files.fileUpload.name;
      fs.writeFile(newPath, data, function (err) {
          if (err) console.log({err: err});
          res.status(200);
          res.send("http://localhost:5000/static/images/"+req.files.fileUpload.name);
      });
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});
module.exports = router;
