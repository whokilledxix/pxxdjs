const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = require("discord.js")
const { prefix } = require("../botconfig.json")


module.exports.run = async (bot, message, args) => {
    
    if(message.content.startsWith(prefix)){
  
    let unmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (unmute) {
      message.react('✅')
    }
  
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**Nie masz permisji do użycia tej komendy!**")
    if(!unmute) return message.reply("Nie znaleziono użytkownika!");
    if(unmute.hasPermission('MANAGE_ROLES')) return message.reply("Nie mam permisji do zabrania roli!");

    let unmuterole = message.guild.roles.fetch(`name`, "Muted");
    if(!unmuterole) return message.channel.send("Nie znaleziono roli ``Muted!``")

    message.mentions.members.first().roles.remove('923321358790844446')
    let unmuteembed = new Discord.MessageEmbed()
      .setTitle("Unmute!")
      .setDescription("<@" + unmute.id + "> Został odciszony przez <@" + message.author.id + ">")
      .setThumbnail(message.author.displayAvatarURL())
    message.channel.send({embed: unmuteembed})

  message.delete();
}
}



module.exports.config = {
    name: "unmute",
    usage: "k!unmute <user>",
    accessableby: "Members",
    aliases: ["unm"]
}