module.exports.run = (client, message, args) => {
    console.log("eval command ran");
  
    const config = require('../config.json');
    const package = require('../package.json');
    const packlock = require('../package-lock.json');
    const xkcd = require('xkcd');
    const Discord = require('discord.js');
    const modules = require('../node_modules/');

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
    
    if(message.author.id !== "107599228900999168"){
        message.channel.send(":x: You do not have access to that command.");
        return;
    } else {
        try {
          const code = args.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
};