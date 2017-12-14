module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    function debugSend(m){
        client.channels.get("389550821584666628").send(m);
        console.log(m);
    };

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
    debugSend(`Ping: ${Math.round(client.ping)} ms | Latency: ${thismessage.createdAt-message.createdAt} ms`);
});
};