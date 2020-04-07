const Discord = require("discord.js")
const { prefix } = require("../botconfig.json")
const colours = require("../colours.json")

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
    
    
    
    let embed = new Discord.MessageEmbed()
       .setTitle("⚠ **Bot Info** ")
       .setColor(colours.fioletowy)
       .addField("〰**Ping Bota**〰", `${Math.round(bot.ws.ping)}`, true)
       .addField("📈 **Uptime** 📉", `${botuptime}`, true)
  
    
}
}

module.exports.config = {
    name: "botinfo",
    usage: "k!botinfo",
    accessableby: "Members",
    aliases: ["bot", "ping"]

}