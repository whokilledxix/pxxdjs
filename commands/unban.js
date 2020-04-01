const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = require("discord.js")
const { prefix } = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {
    if(message.content.startsWith(prefix));
    let member = message.guild.members.unban(' ');
    if (!member) return message.reply("``Nie znaleziono użytkownika!``");
    if (!member.unbannable) return message.reply("``Nie mogę odbanować tego użytkownika!``");
   
    
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**Nie masz permsji do użycia tej komendy")
    
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason specified";
    const Banned = new Discord.MessageEmbed()
      .setColor(colours.fioletowy)
      .setAuthor(
        message.author.id,
      )
      .setTitle("**Ban!**")
      .setDescription(
        "**<@" + message.members.id + ">Został zbanowany przez <@" + message.author.id + "> za: **" + reason
      )
      .setTimestamp()
      .setFooter(
        `Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
     
      ;
    
    
    message.channel.send({embed: Banned});
    


  await member 
      .unban(reason)
      
  
    
 message.delete();
    
   
    

    
}


module.exports.config = {
    name: "unban",
    usage: "k!unban <user> <reason>",
    accessableby: "Adminstrator",
    aliases: ["ub"]
}