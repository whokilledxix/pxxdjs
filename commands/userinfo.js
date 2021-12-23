const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 
const { prefix } = require("../botconfig.json")


module.exports.run = async (bot, message, args) =>{
    
    if(message.content.startsWith(prefix)){
  
  
  
    let uEmbed = new Discord.MessageEmbed()
    .setColor(colours.aqua)
    .setTitle("Informacje o użytkowniku")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Nazwa użytkownika:**", `${message.author.username}`, true)
    .addField("**#**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Data utworzenia konta:**", `${message.author.createdAt}`, true)
    .setFooter(`Komendę wpisał: ${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: uEmbed}); 

   if (uEmbed) {
     message.react('✅')
   }
}
}

module.exports.config = {
    name: "userinfo",
    aliases:["ui", "user"]
}