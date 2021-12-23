const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = require("discord.js")
const { prefix } = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    if(message.content.startsWith(prefix)){
  
  
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    if (mute) {
      message.react('✅')
    }
    
    if (!mute) {
      message.react('❌')
    }
    
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**Nie masz permisji od użycia tej komendy!**")
    if(!mute) return message.reply("Nie znaleziono użytkownika!")
    if(mute.hasPermission('ADMINISTRATOR')) return message.reply("Nie mam permisji do wyciszenia")
    let muterole = message.guild.roles.fetch(`name`, "Muted");
    await message.mentions.members.first().roles.add('923321358790844446');
    let muteembed = new Discord.MessageEmbed()
      .setTitle("Mute!")
      .setDescription("<@" + mute.id + "> Został wyciszony przez <@" + message.author.id + ">")
      .setThumbnail(message.author.displayAvatarURL())

      message.channel.send({embed: muteembed})
      message.delete();

    
}
}
    
module.exports.config = {
    name: "mute",
    usage: "k!mute <@user> <reason>",
    accesableby: "Members",
    aliases: ["m"]
};