var mongoose = require('mongoose');
var Reserva = require('./reserva');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: String,
})

usuarioSchema.reservar = function (biciId, desde, hasta, cb) {
    var reserva = new Reserva({ 
                    usuario: this.id,
                    bicicleta: bidiId,
                    desde: desde,
                    hasta: hasta});
    console.log(reserva);
    reserva.save(cb);
};

module.exports = mongoose.model('Usuario', usuarioSchema);