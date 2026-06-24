require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Steam Insights API running'
    });
});

app.get('/steam/profile/:steamId', async (req, res) => {

    try {

        const steamId = req.params.steamId;

        const response = await axios.get(
            `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`
        );

        const player = response.data.response.players[0];

        res.json(player);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Failed to fetch Steam profile'
        });

    }

});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});