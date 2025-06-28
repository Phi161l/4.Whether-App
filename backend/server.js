const express = require('express');
const dotenv = require('dotenv');

// const cors = require('cors');        // we have to use this is when the fronend and backend are in the d/t origin (d/t protocol or d/t host or d/t port) e.g: http://api.example.com:3000 Vs https://example.com:5000

dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.static("../frontend"));

// app.use(cors());

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod !== 200) {
        return res.status(404).json({ error: data.message });
    }

    res.json({
        country: data.sys.country,
        city: data.name,
        temperature: data.main.temp,  
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
