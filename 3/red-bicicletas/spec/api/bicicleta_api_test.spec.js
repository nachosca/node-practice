/*

var Bicicleta = require('../../models/bicicleta');
var axios = require('axios');
var server = require('../../bin/www');

describe('Bicicleta API', () => {
    describe('GET BICICLETAS /', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1, 'rojo', 'urbana', [-34.6012424, -583861497]);
            Bicicleta.add(a);

            axios.get('http://localhost:3000/api/bicicletas')
            .then(function(res) {
                expect(res.status).toBe(200);
            });
        });
    });

    describe('POST BICICLETAS /create', () => {
        it('Status 200', (done) => {
            
            var a = new Bicicleta(2, 'Rojo', 'urbana', -34.6012424, -58.3861497);
            axios.post('http://localhost:3000/api/bicicletas/create', a)
            .then(function(res) {
                    bici = Bicicleta.findById(2);
                    expect(res.status).toBe(200);
                    expect(bici.color).toBe("Rojo");
                    done();
                }
            );

        });
    });
});

*/