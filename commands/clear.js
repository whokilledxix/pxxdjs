const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args, channel, messages) => {
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**Nie masz permisji do użycia tej komendy!**")
  
   
  channel.bulkDelete(' ')
  
  
  let embed = new Discord.MessageEmbed()
     .setTitle(`**Wyczyszczono czat!**`)
     .setAuthor(`${message.author.username}`)
     .setDescription(`**${message.author.username} usunął ${messages.size}`)
     .setFooter(`KxpBOTv2(beta)`)
     message.channel.send(embed)
}





module.exports.config = {
  name: "clear",
  usage: "k!clear <ilosć>",
  accessableby: "Administrator",
  aliases: ["c"]
}