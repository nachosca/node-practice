var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function(req, res){

    console.log("test 1");
    const bicis = Bicicleta.allBicis();
    console.log(bicis);
    res.status(200).json({
        bicicletas: Bicicleta.allBicis()
    });
}

exports.bicicleta_create = function(req, res){
    ubicacion = [req.body.lat, req.body.lng];
    var bici = Bicicleta.createInstance(req.body.id, req.body.color, req.body.modelo, ubicacion);
 
    Bicicleta.add(bici);

    res.status(200).json({
        bicicleta: bici
    });
}

exports.bicicleta_delete = function(req, res){
    console.logs(req);
    Bicicleta.removeById(req.body.id);

    res.status(204).send();
}