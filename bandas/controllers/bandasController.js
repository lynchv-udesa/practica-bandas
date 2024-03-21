let db = require('../db/index')

const bandasController = {
    index: function(req,res){
        return res.render('bandas',{
            index: db.lista,
            mensaje: 'todas las bandas'
        });
    },

    iD: function(req, res) {
        let bandaId = req.params.id;
        let resultado = [];
        for (let i =0; i < db.lista.length; i++ ) {
            if(bandaId == db.lista[i].id) {
                resultado.push(db.lista[i])
            }
        }
        if(resultado.length == 0) {
            return res.render('bandas', {
                index: resultado,
                mensaje: 'no tenemos a la banda con el id ' + bandaId,
            })
        }
        else{
            return res.render('bandas', {
                index: resultado,
                mensaje: 'Banda con id ' + bandaId,
            })
        } },

        genero: function(req, res) {
            let bandaGenero = req.params.id;
            let resultado = [];
            for (let i =0; i < db.lista.length; i++ ) {
                if(bandaGenero == db.lista[i].id) {
                    resultado.push(db.lista[i])
                }
            }
            if(resultado.length == 0) {
                return res.render('bandas', {
                    index: resultado,
                    mensaje: 'no tenemos bandas del genero ' + bandaGenero,
                })
            }
            else{
                return res.render('bandas', {
                    index: resultado,
                    mensaje: 'Banda del genero ' + bandaGenero,
                })
            } }


};


module.exports = bandasController;
