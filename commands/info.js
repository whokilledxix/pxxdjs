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
    .addField("**Na przykład:**", '\`.info-mute`')
    .addField("**Dostępne informacje:**", '\`.info-ban`\n`.info-cat`\n`.info-dog`\n`.info-kick`\n`.info-mute`\n`.info-pomoc`\n`.info-serverinfo`\n`.info-unmute`\n`.info-userinfo`\n`.info-ping`\n`.info-report`\n`.info-uptime`\n`.info-botinfo`\n', true)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
     .setTimestamp()
    message.channel.send({embed: iEmbed});


    message.delete();



 if(args[0] == "ban") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Ban**")
    .addField("**Sposób użycia:**", '\`.ban <@member> <powod>`\n', true)
    .addField("**Dostępne skróty:**", '\`.b`', true)
    .setDescription("**Banuję oznaczonego użytkownika!**")
    .setFooter(`pxx bot`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }
 if(args[0] == "cat") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - cat**")
    .addField("**Sposób użycia:**", '\`.cat`\n', true)
    .addField("**Dostępne skróty:**", '\`.c`\n`.kot`\n`.koteczek`', true)
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
    .addField("**Sposób użycia:**", '\`.dog`\n', true)
    .addField("**Dostępne skróty:**", '\`.d`\n`.piesek`\n`.pies`\n`.psiur`', true)
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
    .addField("**Sposób użycia:**", '\`.kick <@member> <powod>`\n', true)
    .addField("**Dostępne skróty:**", '\n`.k`', true)
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
    .addField("**Sposób użycia:**", '\`.mute <@member>`\n', true)
    .addField("**Dostępne Skróty:**", '\`.m`', true)
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
    .addField("**Sposób użycia:**", '`\n`**.ping**\n', true)
    .addField("**Dostępne skróty:**", '`\n`**.pong**\n', true)
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
    .addField("**Dostępne Skróty:**", '\`.p`\n`.Pomoc`\n`.Komendy`', true)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()
    message.channel.send({embed: imEmbed})

    message.delete();
 }


 if(args[0] == "report") {
    let irEmbed = new Discord.MessageEmbed()
    .setColor(colours.zielony)
    .setTitle("**Info - Report**")
    .addField("**Sposób użycia:**", '`\n`.report #channel <@Member> <powod>`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`.r`\n`', true)
    .setDescription("**Po wpisaniu:** `.r #channel @member powod` **Wysyłam na oznaczony kanał autora komendy, osobę oznaczoną oraz powód!**", true)
    .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setTimestamp()

    message.channel.send(irEmbed)
    message.delete()
 }

 if(args[0] == "serverinfo") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - ServerInfo**")
    .addField("**Sposób użycia:**", '\`.serverinfo`\n', true)
    .addField("**Dostępne Skróty:**", '\`.si`\n`.serverdsc`\n`.sinfo`', true)
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
    .addField("**Sposób użycia:**", '\`.unmute <@member>`\n', true)
    .addField("**Dostępne skróty:**", '\`.unm`', true)
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
    .addField("**Sposób użycia:**", '`\n`.uptime`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`.up`\n`.u`\n`', true)
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
    .addField("**Sposób użycia:**", '\`.userinfo`\n', true)
    .addField("**Dostępne skróty:**", '\`.user`\n`.ui`', true)
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
  .addField("**Sposób użycia:**", '\`.botinfo`\n`', true)
  .addField("**Dostępne skróty:**", '`.bot`\n`.ping`', true)
  .setDescription("**Pokazuję wszystkie informacje o bocie**")
  .setTimestamp()
  .setFooter(`Komende wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
  message.channel.send(embed)
}




}
}
module.exports.config = {
    name: "info",
    usage: ".info <nazwa komendy>",
    accessableby: "Members",
    aliases: ["informacje", "i"],

}



