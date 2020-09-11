const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const s3 = new aws.S3({
    accessKeyId : process.env.ACCESS_KEY_ID,
    secretAccessKey : process.env.SECRET_ACCESS_KEY 
})

module.exports = multer({
    storage: multerS3({
        s3: s3,
        bucket: "fullstack-app-fitness",
        metadata: function (req, file, cb) {
            cb(null, {fieldname: file.fieldname})
        },
        key: function (req, file, cb) {
            // Browser API handle files
            const ext = path.extname(file.originalname)
            // We keep filename and extension as original
            const name = path.basename(file.originalname, ext)
            // String interpolation to replace spaces and return without spaces, and add data and extension
            cb(null, `${name.replace(/\s/g, "")}-${Date.now()}${ext}`)
        }
    })
})