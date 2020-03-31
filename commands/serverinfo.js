const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 


module.exports.run = async (bot, message, args) =>{
    
    let sEmbed = new Discord.MessageEmbed()
        .setColor(colours.fioletowy)
        .setTitle("Informacje o Serwerze!")
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Nazwa serwera:**", `${message.guild.name}`, true)
        .addField("**Założyciel:**", `${message.guild.owner}`, true)
        .addField("**Ilość użytkowników:**", `${message.guild.memberCount}`, true)
        .addField("**Ilość rang:**", `${message.guild.roles.size}`, true)
        .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
        .setTimestamp()
        message.channel.send({embed: sEmbed});
       
        if (sEmbed) {
          message.react('✅')
        }
    
}



module.exports.config = {
    name:"sinfo",
    aliases: ["si", "serverdesc", "sinfo"]
}