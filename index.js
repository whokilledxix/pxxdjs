const botconfig = require("./botconfig.json");
const colours = require("./colours.json");
const Discord = require("discord.js");
const bot =  new Discord.Client({disableEveryone: true});
require("./util/eventHandler.js")(bot)
const superagent = require("superagent")
const fs = require("fs")

const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.get('/', (req, res) => {
res.json('xxx');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err)

    let jsfile = files.filter(f =>f.split(".").pop () === "js")
    if(jsfile.length <= 0){
        console.log("[LOGS] Nie można znaleźć komend!")
    };

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});


let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("523461849606258709").send(x.join(" "))
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let prefix = botconfig.prefix;
  
    const mentionEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}`)
    .setDescription(`**Witaj: ${message.author.username}**`, "**Oznaczyłeś mnie ponieważ chcesz się dowiedzieć czegoś o mnie tak więc zaczynajmy!**")
    .addField("**Autor Bota:**", '`\Stworzył mnie pedzio#2776 wraz z biblioteką discord.js`')
    .addField("**Informacje dla nerdów:**", '`\Wersja Discord.js:`\n**12.0.1**\n\n`Wersja Node.js:`\n**12.16.1**\n', true)
    .setColor(colours.fioletowy)
    .setFooter(`pxx bot`);
    if (message.mentions.users.array().includes(bot.user)) return message.channel.send(mentionEmbed);//a jak embed?
  
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();

    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello")
    }

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) { 
    commandfile.run(bot, message, args) 
} else if (message.content.startsWith(prefix)) {
    message.react('❌')
    message.reply('Nie znaleziono komendy! wpisz ``.help`` aby zobaczyć listę komend!')

}
  if (message.author.bot) return;
  if (message.mentions.users.array().length > 0) {
    if (message.member.hasPermission('ADMINISTRATOR')) return;
  
  let eembed = new Discord.MessageEmbed()
    .setTitle("**Usunięta wiadomość**")
    .setColor(colours.red)
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Autor", `${message.author} | ${message.author.tag}`, true) //dodaje wzmiankę użytkownika w celu zidentyfikowania go po zmianie nicku.
    .addField("Kanał", `${message.channel}`, true)
    .addField("Treść wiadomości",`${message.content ? message.content : "Brak"}`)
    .setTimestamp()
    .setFooter(`ID: ${message.id}`);
  let channel = message.guild.channels.cache.find(x => x.name === "logs");
  message.channel.send(eembed);
  }
}
 ) 
 

bot.login(botconfig.token);