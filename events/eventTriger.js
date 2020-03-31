const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = new Discord.Client()

module.export.run = async (bot, message, args) => {
  

if (message.isMentioned(client.user)){
    let embed = new Discord.MessageEmbed()
      .setTitle(`message.author.username`)
      .setDescription(`**Witaj:** message.author.username! **Oznaczyłeś mnie ponieważ chciałeś przetestować tą nową funkcję :D oraz dowiedzieć się paru faktów o mnie więc zapraszam**`, true)
      .addField("**Informacje o Autorze:**", '`\`Moim założycielem jest KAPI#3034, który pisał mnie samodzielny w JavaScript`\n``', true)
      .addField("**Jak możesz mnie dodać**", '`**Możesz mnie dodać poprzez ten link**`\n`\n`[>>TUTAJ<<](https://discordapp.com/api/oauth2/authorize?client_id=687014891055218750&permissions=8&scope=bot)', true)
      .addField("**Informacje dla dociekliwych:**", '`\`**Wersja Discord.js:**`\n`12.0.1`\n`**Werjsa Node.js:**`\n`\n`12.16.1`\n`', true)
      .setFooter(`KxpBOT
    }
  
  
  
}