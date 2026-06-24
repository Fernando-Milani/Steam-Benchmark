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

app.get('/steam/profiles/:steamIds', async (req, res) => {

    try {

        const steamIds = req.params.steamIds;

        const response = await axios.get(
            `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamIds}`
        );

        const players = response.data.response.players;

        res.json(players);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Failed to fetch Steam profiles'
        });

    }

});

app.get('/steam/stats/:steamId', async (req, res) => {

    try {

        const steamId = req.params.steamId;

        const response = await axios.get(
            `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true`
        );

        const games = response.data.response.games || [];

        const totalGames = games.length;

        const totalHours = games.reduce(
            (sum, game) => sum + game.playtime_forever,
            0
        ) / 60;

        const favoriteGame = games.sort(
            (a, b) => b.playtime_forever - a.playtime_forever
        )[0];

        res.json({
            totalGames,
            totalHours: Math.round(totalHours),
            favoriteGame: favoriteGame?.name || 'Unknown',
            favoriteGameIcon: favoriteGame
                ? `https://media.steampowered.com/steamcommunity/public/images/apps/${favoriteGame.appid}/${favoriteGame.img_icon_url}.jpg`
                : ''
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: 'Failed to calculate stats'
        });

    }

});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});