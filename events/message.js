const Discord = require("discord.js");

module.exports = async (bot, message) => {
    
  if (message.isMentioned(bot.user)) return message.channel.send('Nac huj bota pingujesz?');
}