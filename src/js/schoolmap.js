import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = L.map("campus-map").setView([-4.0435, 39.6682], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

const library = L.marker([-4.0435, 39.6682]).addTo(map);

library.bindPopup(`
    <h3><strong>Campus Library</strong></h3>
    <p>Study and research facilities.</p>
`);