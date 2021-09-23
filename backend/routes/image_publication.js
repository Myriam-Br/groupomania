const express = require('express');
const router = express.Router();
const imagePublicationCtrl = require('../controllers/image_publication');
const multer = require('../middlewares/multer_config');


//get image_publication list
//router.get('/', imagePublicationCtrl.getImagesPublication);

//create new image_publication
//router.post('/', multer, imagePublicationCtrl.createImg);

//update image_publication
//router.put('/:publicationID', multer, imagePublicationCtrl.updateImagePublication);

//delete image_publication
//router.delete('/:publicationID', multer, imagePublicationCtrl.deleteImagePublication);




module.exports = router;