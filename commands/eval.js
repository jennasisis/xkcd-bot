module.exports.run = (client, message, args) => {
    console.log("eval command ran");
  
    const config = require('../config.json');
    const package = require('../package.json');
    const packlock = require('../package-lock.json');
    const xkcd = require('xkcd');
    const Discord = require('discord.js');

  function debugSend(m){
      client.channels.get("389550821584666628").send(m);
      console.log(m);
  };

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
          let code = args.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          message.channel.send(clean(evaled), {code:"xl"});
          client.channels.get("389550821584666628").send(`**${message.author.username}** evaled \`${code}\`\n**Result:** \`\`\`xl\n${clean(evaled)}\`\`\``);
        } catch (err) {
          let code = args.join(" ");
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          client.channels.get("389550821584666628").send(`**${message.author.username}** evaled ${code}\n**Result:** \`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
};