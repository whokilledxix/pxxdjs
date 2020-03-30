const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let kick = message.mentions.members.first();
  if (kick) {
      message.react('😀')
    }
    if (!kick) {
      message.react('❌')
    }  
  
    if (!kick) return message.reply("``Nie znaleziono użytkownika!``, **Poprawne użycie:** ``k!kick <@user> <powod>``");
    if (!kick.kickable) return message.reply("``Nie mogę wurzycić tego użytkownika!``");
   
    
    
    
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason specified";
    const Kicked = new Discord.MessageEmbed()
      .setColor(colours.fioletowy)
      .setAuthor(
        message.author.username, message.author.avatarURL,
      )
      .setTitle("**Kick!**")
      .setDescription(
        "**<@" + message.mentions.id + ">Został wyrzucony przez <@" + message.author.id + "> za: **" + reason
      )
      .setTimestamp()
      .setFooter(
        `KxpBOTv2(beta)`,
      );
    
    
    message.channel.send({embed: Kicked});
    
    message.delete();
    


  await kick 
      .kick(reason)
      
  
    
    
    
   
    

    
}


module.exports.config = {
    name: "kick",
    usage: "k!kick <user> <reason>",
    accessableby: "Adminstrator",
    aliases: ["k"]
}