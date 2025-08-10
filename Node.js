// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000; // Port number for Wi-Fi server

app.use(cors());

// Mock data for demonstration
let airQualityData = {
    location: "City Center",
    PM25: 35.6,
    CO2: 420,
};

app.get('/air-quality', (req, res) => {
    res.json(airQualityData);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
