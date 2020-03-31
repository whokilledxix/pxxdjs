const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");


module.exports.run = async (bot, message, args, channel, messages) => {
  
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**Nie masz permisji do użycia tej komendy!**")
  
   
  message.channel.bulkDelete(args[0])
  
  
     let embed = new Discord.MessageEmbed()
     .setTitle(`**Wyczyszczono chat!**`)
     .setAuthor(`${message.author.username}`)
     .setDescription(`**Chat zosta${message.author.username} `)
     .setFooter(`KxpBOTv2(beta)`)
     message.channel.send(embed)


}




module.exports.config = {
  name: "clear",
  usage: "k!clear <ilosć>",
  accessableby: "Administrator",
  aliases: ["c"]
}