const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args, channel, messages) => {
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**Nie masz permisji do użycia tej komendy!**")
  
   
  message.channel.bulkDelete(args[0])
  
  
     let embed = new Discord.MessageEmbed()
     .setTitle(`**Wyczyszczono chat!**`)
     .addField(`⚠**Uwaga!**⚠`, `\n**Chat został wyczyszczony przez:**\n\n**${message.author.username}**\n\n**Ilość usuniętych wiadomości:**\n\n**${args[0]}**`)
     .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
     .setTimestamp()
     message.channel.send(embed)



} 







module.exports.config = {
  name: "clear",
  usage: "k!clear <ilosć>",
  accessableby: "Administrator",
  aliases: ["c"]
}