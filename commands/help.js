module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    
    message.react("👌");
    message.author.send(new Discord.RichEmbed()
        .addField("Commands:", "`~xkcd help`: This menu\n`~xkcd ping`: Ping and Latency\n`~xkcd latest`: Find the latest xkcd comic\n`~xkcd find <#>`: Finds the xkcd comic by ID\n`~xkcd info`: Get info on the bot")
        .setColor("0xFFFFFF")
    )
};