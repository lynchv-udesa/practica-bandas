const express = require('express');
const router = express.Router();


const bandasController = require('../controllers/bandasController');

router.get('/', bandasController.index);
router.get("/bandas", bandasController.banda)
router.get("/bandas/generos", bandasController.searchB)
router.get('/bandas/generos/:genero', bandasController.genero);
router.get('/bandas/:id', bandasController.id);

module.exports = router;