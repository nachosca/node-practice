var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function(req, res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis})
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create');
}

exports.bicicleta_create_post = function(req, res){
    ubicacion = [req.body.lat, req.body.lng];
    var bici = Bicicleta.createInstance(req.body.id, req.body.color, req.body.modelo, ubicacion);
 
    Bicicleta.add(bici);

    console.log('3' + bici);

    res.redirect('/bicicletas');
}

exports.bicicleta_delete_post = function(req, res){
    console.log(req);
    console.log(req.body.id);
    Bicicleta.removeById(req.body.id);

    res.redirect('/bicicletas');
}


exports.bicicleta_update_get = function(req, res){
    console.log("bicicleta_update_get");
    console.log(req.params.id);
    var bici = Bicicleta.findById(req.params.id);
    console.log(bici.lat);
    res.render('bicicletas/update', {bici: bici});
}

exports.bicicleta_update_post = function(req, res){
    console.log(req);
    console.log("bicicleta_update_post");
    var bici = Bicicleta.findById(req.params.id);

    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];

    console.log(bici.color);

    res.redirect('/bicicletas');
}