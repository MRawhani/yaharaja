const aws = require('aws-sdk')
const config = require('../config')
const multer = require('multer')
const multerS3 = require('multer-s3')
 
aws.config.update({
    secretAccessKey:config.SECRET_ACCESS_KEY,
    accessKeyId:config.ACCESS_KEY_ID,
    region:'us-east-2'
})
const s3 = new aws.S3()
 const fileFilter = (req,file, cb)=>{
     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
         cb(null, true)
     }
     else{
         cb(new Error('نوعية الملف غير مدعومة'), false)
     }
 }
const upload = multer({
    fileFilter,
  storage: multerS3({
    s3: s3,
    
    acl:'public-read',
    bucket: 'yaharajah',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: "Testing"});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;