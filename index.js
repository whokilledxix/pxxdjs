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
res.json('This bot should be online! Uptimerobot will keep it alive');
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
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();

    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello")
    }

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) { 
    commandfile.run(bot, message, args) 
} else {
  if(message.content.startsWith(prefix)) {
    message.react('❌')
    message.reply('Nie znaleziono komendy! wpisz ``k!pomoc`` aby zobaczyć listę komend!')
  }
}


    }

   

 )

bot.login(botconfig.token);