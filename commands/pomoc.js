const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
let prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {
    
  
  
  
  let pomoc = new Discord.MessageEmbed()
    .setColor(colours.fioletowy)
    .setTitle(``, true)
    .setThumbnail(message.guild.iconURL)
    .addField(`**Wysłano pomylśnie!**`, "``Moja lista komend została wysłana do ciebie na pw!``", true)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: pomoc});
if (pomoc) {
    message.react('✅')
  } 
 
    
    
    
    let pEmbed = new Discord.MessageEmbed()
    
     .setColor(colours.jasnoniebieski)
     .setTitle("**Oto moje komendy:**", true)
     .addField("**Prefix:**", `${prefix}`, true)
     .addField("**Podstawową komedna jest:**", `${prefix}pomoc`)
     .addField("**4Fun:**", '\`k!cat\`\n\`k!dog\`\n`k!ping`\n')
     .addField("**Moderacyjne:**", '\n`k!kick`\n`k!ban`\n`k!mute`\n`k!unmute`\n`k!report\n`k!clear`\n')
     .addField("**Informacyjne:**", '\n`k!info`\n')
     .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
     .setTimestamp()
     message.author.send({embed: pEmbed});

   

}


module.exports.config = {
    name: "pomoc",
    usage: "k!pomoc",
    aliases: ["p", "Pomoc","Komendy"],
    accessableby: "Members"
}