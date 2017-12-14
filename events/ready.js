module.exports.run = async (client) => {
    const Discord = require('discord.js');
    const xkcd = require('xkcd');

    await console.log("Ready");
    await client.user.setGame("with xkcd");
};