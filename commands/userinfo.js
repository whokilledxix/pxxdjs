const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 



module.exports.run = async (bot, message, args) =>{
    let uEmbed = new Discord.MessageEmbed()
    .setColor(colours.aqua)
    .setTitle("Informacje o użytkowniku")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Nazwa użytkownika:**", `${message.author.username}`, true)
    .addField("**#**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Data utworzenia konta:**", `${message.author.createdAt}`, true)
    .setFooter(`KxpBOTv2 (beta)`, bot.user.displayAvatarURL);
    message.channel.send({embed: uEmbed}); 

    message.delete();
}

module.exports.config = {
    name: "userinfo",
    aliases:["ui", "user"]
}