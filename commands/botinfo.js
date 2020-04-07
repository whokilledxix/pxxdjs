const Discord = require("discord.js")
const { prefix } = require("../botconfig.json")
const colours = require("../colours.json")
const pack = require("../package.json")
module.exports.run = async (bot, message, args) => {
   
  if(message.content.startsWith(prefix)){
  
   let uptime = process.uptime();
    let days = Math.floor((uptime % 31536000) / 86400);
    let hours = Math.floor((uptime % 86400) / 3600);
    let minutes = Math.floor((uptime % 3600) / 60);
    let seconds = Math.round(uptime % 60);
    let botuptime =
      (days > 0 ? days + "d : " : "") +
      (hours > 0 ? hours + "g : " : "") +
      (minutes > 0 ? minutes + "m : " : "") +
      (seconds > 0 ? seconds + "s" : "");
    
     if (process.platform) {
      var result;
      const platform = process.platform;
      if (platform === "win32") result = "Windows";
      else if (platform === "aix") result = "Aix";
      else if (platform === "linux") result = "Linux";
      else if (platform === "darwin") result = "Darwin";
      else if (platform === "openbsd") result = "OpenBSD";
      else if (platform === "sunos") result = "Solaris";
      else if (platform === "freebsd") result = "FreeBSD";
    }
    
    let embed = new Discord.MessageEmbed()
       .setTitle("⚠ **Bot Info** ")
       .setColor(colours.fioletowy)
       .setTimestamp()
       .addField("**__Prefix__**", `${prefix}`, true)
       .addField("〰**__Ping Bota__**〰", `${Math.round(bot.ws.ping)}ms`)
       .addField("📈 **__Uptime__** 📉", `${botuptime}`)
       .addField("💾 **__Software__**💾", `${result ? result : "Niezidentyfikowano!"}`, true)
       .addField("**__Wersja Node.js__**", `${process.version.slice(1)}`)
       .addField("**__Wersja Discord.js__**", `${pack.dependencies["discord.js"].slice(1)}`)
       .setFooter(`Komendę wpisał: ${message.author.username}`, `${message.author.displayAvatarURL()}`)
    message.channel.send(embed)
  
    
}
}

module.exports.config = {
    name: "botinfo",
    usage: "k!botinfo",
    accessableby: "Members",
    aliases: ["bot", "ping"]

}