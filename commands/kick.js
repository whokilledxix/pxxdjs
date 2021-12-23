const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = require("discord.js")
const { prefix } = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {
  
  if(message.content.startsWith(prefix)){
  
  
  
  let kick = message.mentions.members.first();
  if (kick) {
      message.react('😀')
    }
    if (!kick) {
      message.react('❌')
    }  
  
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**Nie masz permisji do użycia tej komendy!**")
    if (!kick) return message.reply("``Nie znaleziono użytkownika!``, **Poprawne użycie:** ``.kick <@user> <powod>``");
    if (!kick.kickable) return message.reply("``Nie mogę wyrzucić tego użytkownika!``");
    if(kick.hasPermission('ADMINISTRATOR')) return message.reply("Nie mam permisji do wyrzucenia!")
    
   
    
    
    
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason specified";
    const Kicked = new Discord.MessageEmbed()
      .setColor(colours.fioletowy)
      .setAuthor(
        message.author.username, message.author.avatarURL,
      )
      .setTitle("**Kick!**")
      .setDescription(
        "**<@" + message.mentions.id + "> Został wyrzucony przez <@" + message.author.id + "> za: **" + reason
      )
      .setTimestamp()
      .setFooter(
      `Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
     
      ;
    
    
    message.channel.send({embed: Kicked});
    
    message.delete();
    


  await kick 
      .kick(reason)
      
  
    
    
    
   
    

    
}
}

module.exports.config = {
    name: "kick",
    usage: "k!kick <user> <reason>",
    accessableby: "Adminstrator",
    aliases: ["k"]
}