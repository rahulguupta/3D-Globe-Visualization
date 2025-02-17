// Map ko initialize karna
const map = L.map('map').setView([20.5937, 78.9629], 5); // India ke center par set kiya

// OpenStreetMap tile layer add karna
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Marker add karna
const marker = L.marker([20.5937, 78.9629]).addTo(map);
marker.bindPopup('<b>Hello India!</b><br>This is a marker.').openPopup();
