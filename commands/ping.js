module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    message.channel.send(new Discord.RichEmbed()
    .addField(":ping_pong: Ping:", "Pinging...", false)
    .addField(":left_right_arrow: Latency:", "Pinging...")
    .setColor(message.member.displayColor)
).then(thismessage => {
    thismessage.delete();
    message.channel.send(new Discord.RichEmbed()
        .addField(":ping_pong: Ping:", `${Math.round(client.ping)} ms`)
        .addField(":left_right_arrow: Latency:", `${thismessage.createdAt-message.createdAt} ms`)
        .setColor(message.member.displayColor)
    );
});
};