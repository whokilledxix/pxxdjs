const Discord = require("discord.js")
const colours = require("../colours.json");
const { prefix } = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {
    if(message.content.startsWith(prefix)){ 
   
    let Channel = message.mentions.channels.first()
    if(!Channel) return message.channel.send("**Prosze oznacz kanał na, którym mam wysłać zgłoszenie!** **Np:** ``.r #logi @member``")
    let target = message.mentions.members.first()
    if(!target) return message.channel.send("``Proszę oznacz osobę, którą masz zamiar zgłosić!``")
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("``Proszę podaj powód do osoby, którą chcesz zgłosić!``")
 
    
    
    
      
    let mChannel = new Discord.MessageEmbed()
    .setTitle("**Nowe Zgłoszenie!**")
    .setColor(colours.fioletowy)
    .addField("**Autor komendy**", message.author.username)
    .addField("**Osoba Zgłoszona**", target.user.username)
    .addField("**Powód:**", reason)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()   

    Channel.send(mChannel)
}
}


module.exports.config = {
    name: "report",
    usage: "k!report <channel> <user> <powod>",
    accessableby: "Members",
    aliases: ["r"]
}