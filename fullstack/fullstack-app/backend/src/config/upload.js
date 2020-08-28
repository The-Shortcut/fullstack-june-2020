// Import packages and set path
const multer = require('multer')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", "..", "files"),
        filename: (req, file, cb) => {
            // Browser API handle files
            const ext = path.extname(file.originalname)
            // We keep filename and extension as original
            const name = path.basename(file.originalname, ext)
            // String interpolation to replace spaces and return without spaces, and add data and extension
            cb(null, `${name.replace(/\s/g, "")}-${Date.now()}${ext}`)
        }
    })
}