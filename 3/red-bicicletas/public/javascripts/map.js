var map = L.map('main_map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);