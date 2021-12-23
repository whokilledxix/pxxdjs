const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = new Discord.Client()

module.exports = bot (bot, message, args) => {
  

if (message.isMentioned(client.user)){
    let embed = new Discord.MessageEmbed()
      .setTitle(`message.author.username`)
      .setDescription(`**Witaj:** message.author.username! **Oznaczyłeś mnie ponieważ chciałeś przetestować tą nową funkcję :D oraz dowiedzieć się paru faktów o mnie więc zapraszam**`, true)
      .setFooter(`pxx bot`)
    message.channel.send(embed)
    }
  
  
  
}