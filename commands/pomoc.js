const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const prefix = (botconfig)


module.exports.run = async (bot, message, args) => {
    
  
  
  
  let pomoc = new Discord.MessageEmbed()
    .setColor(colours.fioletowy)
    .setTitle(``, true)
    .setThumbnail(message.guild.iconURL)
    .addField(`**Wysłano pomylśnie!**`, "``Moja lista komend została wysłana do ciebie na pw!``", true)
    .setFooter(`KxpBOTv2 (beta)`)
    message.channel.send({embed: pomoc});
if (pomoc) {
    message.react('✅')
  } 
 
    
    
    
    let pEmbed = new Discord.MessageEmbed()
    
     .setColor(colours.jasnoniebieski)
     .setTitle("**Oto moje komendy:**", true)
     .addField("**Prefix:**", "``k!``", true, true)
     .addField("**Podstawową komedna jest:**", "``k!pomoc``", true, true)
     .addField("**4Fun:**", '\`k!cat\`\n\`k!dog\`\n`k!ping`\n', true, true)
     .addField("**Moderacyjne:**", '\n`k!kick`\n`k!ban`\n`k!mute`\n`k!unmute`\n`k!report\n`', true)
     .addField("**Informacyjne:**", '\n`k!info`\n', true, true)
     .setFooter(`KxpBOTv2 (beta)`);
     message.author.send({embed: pEmbed});

   

}


module.exports.config = {
    name: "pomoc",
    usage: "k!pomoc",
    aliases: ["p", "Pomoc","Komendy"],
    accessableby: "Members"
}