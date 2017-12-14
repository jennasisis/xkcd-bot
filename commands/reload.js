module.exports.run = (client, message, args) => {
    console.log("running reload command");
    const config = require('../config.json');
    function debugSend(m){
        client.channels.get("389550821584666628").send(m);
        console.log(m);
    };

    if(message.author.id !== config.akiiID){return message.channel.send(":x: You do not have permission to use this command")} else {
    if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
    debugSend(`The command ${args[0]} has been reloaded`);
    }
};