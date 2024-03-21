const express = require('express');
const router = express.Router();


const bandasController = require('../controllers/bandasController');

router.get('/', bandasController.index);
router.get('/bandas/:id', bandasController.iD);
router.get('/bandas/:genero', bandasController.genero);

module.exports = router;