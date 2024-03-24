let db = require('../db/index')

const bandasController = {
    searchB: function(req,res) {
        const genero = req.query.genero; 
        if (genero) {
            return res.redirect(`/bandas/generos/${genero}`)
        } else {
            return res.render("generos", {
                mensaje: "Busca tu género favorito"
            });
    }},
    index: function(req,res){
        return res.render('index',{
            index: db.lista,
        });
    },

    banda: function(req,res){
        return res.render('bandas',{
            index: db.lista,
            mensaje: 'Todas las bandas'
        });
    },

    iD: function(req, res) {
        let bandaId = req.params.id;
        let resultado = [];
        for (let i = 0; i < db.lista.length; i++ ) {
            if(bandaId == db.lista[i].id) {
                resultado.push(db.lista[i])
            }
        }
        if(resultado.length == 0) {
            return res.render('detalleBanda', {
                index: resultado,
                mensaje: 'no tenemos a la banda con el id ' + bandaId,
            })
        }
        else{
            return res.render('detalleBanda', {
                index: resultado,
                mensaje: 'Banda con id ' + bandaId,
            })
        } },

        genero: function(req, res) {
            let bandaGenero = req.params.genero;
            let resultado = [];
            for (let i =0; i < db.lista.length; i++ ) {
                if(bandaGenero == db.lista[i].genero) {
                    resultado.push(db.lista[i])
                }
            }
            if(resultado.length == 0) {
                return res.render('generos', {
                    index: resultado,
                    mensaje: 'No tenemos bandas del género ' + bandaGenero,
                })
            }
            else{
                return res.render('index', {
                    index: resultado,
                    mensaje: 'Banda del genero ' + bandaGenero,
                })
            } }


};


module.exports = bandasController;
