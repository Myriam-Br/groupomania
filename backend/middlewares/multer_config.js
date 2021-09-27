const multer = require("multer")

const MIME_TYPES = {
  "image/gif": "gif",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
}

console.log("------------ ICI MULTER ------------")

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images")
  },

  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_")
    const extension = MIME_TYPES[file.mimetype]
    callback(null, name + Date.now() + "." + extension)
  },
})

console.log("------------ AFTER STORAGE MULTER ------------")

module.exports = multer({ storage: storage }).single("image")
