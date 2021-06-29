var map = L.map('main_map').setView([-34.6012, -58.38614], 13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

$.ajax({
    datatype: 'json',
    url: 'api/bicicletas',
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map); 
        });
    }
});