const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/banda/:id', mainController.id);
router.get('/genero/:ok?', mainController.genero);

module.exports = router;