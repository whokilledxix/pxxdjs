const Discord = require("discord.js")

module.exports.run = async (bot, message, args, client) => {


    let uptime = process.uptime();
    let days = Math.floor((uptime % 31536000) / 86400);
    let hours = Math.floor((uptime % 86400) / 3600);
    let minutes = Math.floor((uptime % 3600) / 60);
    let seconds = Math.round(uptime % 60);
    let botuptime =
      (days > 0 ? days + "d : " : "") +
      (hours > 0 ? hours + "g : " : "") +
      (minutes > 0 ? minutes + "m : " : "") +
      (seconds > 0 ? seconds + "s" : "");
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle("**Mój Uptime**")
    .setAuthor(message.author.username)
    .addField("**Czas Działania:**", `${botuptime}`, false)
    .setFooter(`KxpBOTv2(beta)`)

   message.channel.send(embed);
    
    
}




module.exports.config = {
    name: "uptime",
    usage: "k!uptime",
    accessableby: "Members",
    aliases: ["up", "u"]
}