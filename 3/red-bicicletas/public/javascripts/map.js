var map = L.map('main_map').setView([-34.6012, -58.38614], 13);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

L.marker([-34.6012,-58.3861]).addTo(map);
