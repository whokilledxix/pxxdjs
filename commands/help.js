const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const { prefix } = require("../botconfig.json")


module.exports.run = async (bot, message, args) => {
    
  if(message.content.startsWith(prefix)){
  
    let pomoc = new Discord.MessageEmbed()
      .setColor(colours.fioletowy)
      .setTitle(`Wysyłam...`, true)
      .setThumbnail(message.guild.iconURL)
      .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setTimestamp()
      message.channel.send({embed: pomoc});
  if (pomoc) {
      message.react('✅')
    } 
   
      
      
      
      let pEmbed = new Discord.MessageEmbed()
        .setTitle("**Oto moje komendy:**", true)
        .setColor(colours.fioletowy)
        .addField("**Prefix:**", `${prefix}`, true)
        .addField("**Podstawową komendą jest:**", `${prefix}help`)
        .addField("**4Fun:**", '\`.cat\`\n\`.dog\`\n`.ping`\n')
        .addField("**Moderacyjne:**", '\n`.kick`\n`.ban`\n`.mute`\n`.unmute`\n`.report\n`.clear\n`.say`')
        .addField("**Administracyjne:**", '\n`.reload`\n')
        .addField("**Informacyjne:**", '\n`.info`\n`.userinfo`\n`.serverinfo`\n`.uptime`\n`.botinfo`')
        .setFooter(`Komendę wpisał: ${message.author.username}`, `${message.author.displayAvatarURL()}`)  
       message.channel.send({embed: pEmbed});
  
     
  
  }
  }

module.exports.config = {
    name: "help",
    usage: ".help",
    aliases: ["Komendy","p","pomoc"],
    accessableby: "Members"
}
