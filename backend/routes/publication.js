const express = require('express');
const router = express.Router();
const publicationCtrl = require('../controllers/publication');

//get poublication list
router.get('/', publicationCtrl.getPublicationList);

//get poublication by id
router.get('/:id', publicationCtrl.getPublicationById);

//create new poublication 
router.post('/', publicationCtrl.createNewPublication);

//update poublication
//router.put('/:id', publicationCtrl.updateUser)

//delete poublication 
router.delete('/:id', publicationCtrl.deletePublication);

module.exports = router;