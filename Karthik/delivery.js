// Initialize the map
const map = L.map('map').setView([3.1390, 101.6869], 15); // Set initial coordinates

// Add OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Define two locations for the markers
const location1 = [3.1390, 101.6869]; // First marker location
const location2 = [3.1425, 101.6890]; // Second marker location

// Add the first marker to the map
const marker1 = L.marker(location1).addTo(map);
marker1.bindPopup("First Location").openPopup();  // Popup for the first marker

// Add the second marker to the map
const marker2 = L.marker(location2).addTo(map);
marker2.bindPopup("Second Location");  // Popup for the second marker

// Draw a polyline (line) connecting the two markers
const polyline = L.polyline([location1, location2], { color: 'blue' }).addTo(map);

// Function to move the first marker to the second marker's location
function moveFirstMarker() {
    let lat = location1[0];
    let lng = location1[1];
    let latIncrement = (location2[0] - location1[0]) / 100; // Number of steps
    let lngIncrement = (location2[1] - location1[1]) / 100;

    let step = 0;
    
    const interval = setInterval(() => {
        // Increment lat and lng
        lat += latIncrement;
        lng += lngIncrement;

        // Set new position for the first marker
        marker1.setLatLng([lat, lng]);

        step++;

        // Stop moving after 100 steps
        if (step >= 100) {
            clearInterval(interval);
        }
    }, 50); // Move every 50ms (adjust speed here)
}

// Function to move the second marker to the first marker's location
function moveSecondMarker() {
    let lat = location2[0];
    let lng = location2[1];
    let latIncrement = (location1[0] - location2[0]) / 100; // Number of steps
    let lngIncrement = (location1[1] - location2[1]) / 100;

    let step = 0;

    const interval = setInterval(() => {
        // Increment lat and lng
        lat += latIncrement;
        lng += lngIncrement;

        // Set new position for the second marker
        marker2.setLatLng([lat, lng]);

        step++;

        // Stop moving after 100 steps
        if (step >= 100) {
            clearInterval(interval);
        }
    }, 50); // Move every 50ms (adjust speed here)
}

// Trigger the movement of the first and second markers after a delay
setTimeout(() => {
    moveFirstMarker(); // Start moving the first marker
    setTimeout(moveSecondMarker, 2500); // Start moving the second marker after a short delay
}, 2000); // Start the first marker movement after 2 seconds
