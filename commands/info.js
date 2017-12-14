module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    
    message.react("👌");
    message.author.send(new Discord.RichEmbed()
        .addField(":wave: Hello! I am Obligatory XKCD! :smiley:", "Type `~xkcd help` to begin!", true)
        .addField("Who made me?", "I was developed by Akii#2111 as a contestant to his good friend Gallium's xkcd bot that kept going offline. I'm essentially a complete replica of his bot, with a few minor changes.", true)
        .addField("What powers me?", "[Discord.js](http://discord.js.org/)\n[NPM: xkcd](http://www.npmjs.com/package/xkcd)", true)
        .addField("Honorable Mentions:", "`Gallium#1327` - Gave Akii the idea to create me\n`Evie.Codes#4611` - Provided the command handler system Akii uses in every single one of his bots", true)
    );
};