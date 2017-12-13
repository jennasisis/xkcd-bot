module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const xkcd = require('xkcd');

    
    xkcd(function (data) {
        
        //Some basic framework just to make it look prettier

        var month = "Error"
        if(data.month === "1"){month = "January"}
        else if(data.month === "2"){month = "Febuary"}
        else if(data.month === "3"){month = "March"}
        else if(data.month === "4"){month = "April"}
        else if(data.month === "5"){month = "May"}
        else if(data.month === "6"){month = "June"}
        else if(data.month === "7"){month = "July"}
        else if(data.month === "8"){month = "August"}
        else if(data.month === "9"){month = "September"}
        else if(data.month === "10"){month = "October"}
        else if(data.month === "11"){month = "November"}
        else if(data.month === "12"){month = "December"}
        else {month = "Error"};
        
        var day = "Error"
        if(data.day === "1"){day = "1st"}
        else if(data.day === "2"){day = "2nd"}
        else if(data.day === "3"){day = "3rd"}
        else if(data.day > 3){day = `${data.day}th`}
        else {day = "Error"};
        
        
        message.channel.send(new Discord.RichEmbed()
            .setColor('0xFFFFFF')
            .setDescription(data.alt)
            .setFooter(`Published: ${month} ${day}, ${data.year} | #${data.num}`)
            .setAuthor(data.title, null, `http://xkcd.com/${data.num}/`)
            .setImage(data.img)
        );
    });
}