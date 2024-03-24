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

    id: function(req, res) {
        let id = req.params.id;
        let encontrado = false;
        
        for (let i = 0; i < db.lista.length; i++) {
            if (id == db.lista[i].id) {
                encontrado = true;
                return res.render("detalleBanda", {
                    nombre: `${db.lista[i].nombre}`,
                    imagen: `${db.lista[i].cover}`,
                    integrantes: `${db.lista[i].integrantes}`,
                    genero: `${db.lista[i].genero}`,
                    topCancion1: `${db.lista[i].topCanciones[0]}`,
                    topCancion2: `${db.lista[i].topCanciones[1]}`,
                    topCancion3: `${db.lista[i].topCanciones[2]}`,
                    titulo: "Más información",
                });
            }
        }
        
        if (!encontrado) {
            return res.render("detalleBanda", {
                titulo: "No se encuentra el id solicitado",
                nombre: "?",
                imagen: "?",
                integrantes: "?",
                genero: "?",
                topCancion1: "?",
                topCancion2: "?",
                topCancion3: "?",
            });
        }    

    },

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
                return res.render('porGenero', {
                    index: resultado,
                    mensaje: 'Bandas del género ' + bandaGenero,
                })
            } }


};


module.exports = bandasController;
