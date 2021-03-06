const express = require('express');
const router = express.Router();
const publicationCtrl = require('../controllers/publication');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer_config');

//publication list
router.get('/',  publicationCtrl.publicationsList)

//publication list
router.get('/:id',  publicationCtrl.publicationsById)

//create new publication
router.post('/', auth, multer, publicationCtrl.createPublication)

//create new publication
router.delete('/:id', auth, publicationCtrl.deletePublication)

module.exports = router;