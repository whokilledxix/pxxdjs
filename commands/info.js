const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 
const { prefix } = require("../botconfig.json")



module.exports.run = async(bot, message, args) => {
   
  if(message.content.startsWith(prefix)){
  
  
    let iEmbed = new Discord.MessageEmbed()
    .setColor(colours.aqua)
    .setTitle("**Informacje**")
    .setDescription("``Ta komenda umożliwia dowiedzeniu się co oznaczają poszczególne komendy!``")
    .addField("**Na przykład:**", '\`k!info-mute`')
    .addField("**Dostępne informacje:**", '\`k!info-ban`\n`k!info-cat`\n`k!info-dog`\n`k!info-kick`\n`k!info-mute`\n`k!info-pomoc`\n`k!info-serverinfo`\n`k!info-unmute`\n`k!info-userinfo`\n`k!info-ping`\n`k!info-report`\n`k!info-uptime`\n`k!info-botinfo`\n', true)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
     .setTimestamp()
    message.channel.send({embed: iEmbed});


    message.delete();



 if(args[0] == "ban") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Ban**")
    .addField("**Sposób użycia:**", '\`k!ban <@member> <powod>`\n', true)
    .addField("**Dostępne skróty:**", '\`k!b`', true)
    .setDescription("**Banuję oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }
 if(args[0] == "cat") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - cat**")
    .addField("**Sposób użycia:**", '\`k!cat`\n', true)
    .addField("**Dostępne skróty:**", '\`k!c`\n`k!kot`\n`k!koteczek`', true)
    .setDescription("**Pokazuję losowe zdjęcie kota!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "dog") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - dog**")
    .addField("**Sposób użycia:**", '\`k!dog`\n', true)
    .addField("**Dostępne skróty:**", '\`k!d`\n`k!piesek`\n`k!pies`\n`k!psiur`', true)
    .setDescription("**Pokazuję losowe zdjęcie psa!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "kick") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Kick**")
    .addField("**Sposób użycia:**", '\`k!kick <@member> <powod>`\n', true)
    .addField("**Dostępne skróty:**", '\n`k!k`', true)
    .setDescription("**Wyrzucam oznaczonego użytkownika!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "mute") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Mute**")
    .addField("**Sposób użycia:**", '\`k!mute <@member>`\n', true)
    .addField("**Dostępne Skróty:**", '\`k!m`', true)
    .setDescription("**Mutuję oznaczonego użytkownika!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "ping") {
    let ipEmbed = new Discord.MessageEmbed()
    .setColor(colours.aqua)
    .setTitle("**Info - Ping**")
    .addField("**Sposób użycia:**", '`\n`**k!ping**\n', true)
    .addField("**Dostępne skróty:**", '`\n`**k!pong**\n', true)
    .setDescription("**Pokazuję aktualny ping bota oraz API**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()

    message.channel.send(ipEmbed)
    message.delete()
 }

 if(args[0] == "pomoc") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Pomoc**")
    .setDescription("**Wyświetlam listę komend, które są w bocie**")
    .addField("**Dostępne Skróty:**", '\`k!p`\n`k!Pomoc`\n`k!Komendy`', true)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})

    message.delete();
 }


 if(args[0] == "report") {
    let irEmbed = new Discord.MessageEmbed()
    .setColor(colours.zielony)
    .setTitle("**Info - Report**")
    .addField("**Sposób użycia:**", '`\n`k!report #channel <@Member> <powod>`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`k!r`\n`', true)
    .setDescription("**Po wpisaniu:** `k!r #channel @member powod` **Wysyłam na oznaczony kanał autora komendy, osobę oznaczoną oraz powód!**", true)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()

    message.channel.send(irEmbed)
    message.delete()
 }

 if(args[0] == "serverinfo") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - ServerInfo**")
    .addField("**Sposób użycia:**", '\`k!serverinfo`\n', true)
    .addField("**Dostępne Skróty:**", '\`k!si`\n`k!serverdsc`\n`k!sinfo`', true)
    .setDescription("**Pokazują informację o twoim serwerze!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})
    
    message.delete();
 }

 if(args[0] == "unmute"){
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Unmute**")
    .addField("**Sposób użycia:**", '\`k!unmute <@member>`\n', true)
    .addField("**Dostępne skróty:**", '\`k!unm`', true)
    .setDescription("**Odciszam oznaczonego użytkownika!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "uptime") {
    let iuEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Uptime**")
    .addField("**Sposób użycia:**", '`\n`k!uptime`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`k!up`\n`k!u`\n`', true)
    .setDescription("**Pokazuję przez ile: dni, godzin, minut oraz sekund bot jest online!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send(iuEmbed)
    message.delete();
 }

 if(args[0] == "userinfo"){
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - UserInfo**")
    .addField("**Sposób użycia:**", '\`k!userinfo`\n', true)
    .addField("**Dostępne skróty:**", '\`k!user`\n`k!ui`', true)
    .setDescription("**Pokazuję informację o tobie!**")
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})
    
    
    message.delete();
 }
if(args[0] == "botinfo"){
  let embed = new Discord.MessageEmbed()
  .setColor(colours.jasnoniebieski)
  .setTitle("**Info - botinfo**")
  .addField("**Sposób")
}




}
}
module.exports.config = {
    name: "info",
    usage: "k!info <nazwa komendy>",
    accessableby: "Members",
    aliases: ["informacje", "i"],

}



