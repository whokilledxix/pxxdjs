const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 


module.exports.run = async(bot, message, args) => {
    let iEmbed = new Discord.MessageEmbed()
    .setColor(colours.aqua)
    .setTitle("**Informacje**")
    .setDescription("``Ta komenda umożliwia dowiedzeniu się co oznaczają poszczególne komendy!``")
    .addField("**Na przykład:**", '\`k!info-mute`')
    .addField("**Dostępne informacje:**", '\`k!info-ban(k!ib)`\n`k!info-cat(k!ic)`\n`k!info-dog(k!id)`\n`k!info-kick(k!ik)`\n`k!info-mute(k!im)`\n`k!info-pomoc(k!ip)`\n`k!info-serverinfo(k!is)`\n`k!info-unmute(k!iu)`\n`k!info-userinfo(k!i-ui)`\n`k!info-ping(k!i-p)`\n`k!info-report(k!ir)`\n`k!info-uptime(k!i-u)`\n', true)
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: iEmbed});


    message.delete();



 if(args[0] == "info-ban"||"i-ban"||"ib") {
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
 if(args[0] == "info-cat"||"ic"||"i-cat") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - cat**")
    .addField("**Sposób użycia:**", '\`k!cat`\n', true)
    .addField("**Dostępne skróty:**", '\`k!c`\n`k!kot`\n`k!koteczek`', true)
    .setDescription("**Pokazuję losowe zdjęcie kota!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "info-dog"||"i-dog"||"id") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - dog**")
    .addField("**Sposób użycia:**", '\`k!dog`\n', true)
    .addField("**Dostępne skróty:**", '\`k!d`\n`k!piesek`\n`k!pies`\n`k!psiur`', true)
    .setDescription("**Pokazuję losowe zdjęcie psa!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "info-kick"||"i-kick"||"ik") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Kick**")
    .addField("**Sposób użycia:**", '\`k!kick <@member> <powod>`\n', true)
    .addField("**Dostępne skróty:**", '\n`k!k`', true)
    .setDescription("**Wyrzucam oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "info-mute"||"i-mute"||"im") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Mute**")
    .addField("**Sposób użycia:**", '\`k!mute <@member>`\n', true)
    .addField("**Dostępne Skróty:**", '\`k!m`', true)
    .setDescription("**Mutuję oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "info-ping"||"i-ping") {
    let ipEmbed = new Discord.MessageEmbed()
    .setColor(colours.aqua)
    .setTitle("**Info - Ping**")
    .addField("**Sposób użycia:**", '`\n`**k!ping**\n', true)
    .addField("**Dostępne skróty:**", '`\n`**k!pong**\n', true)
    .setDescription("**Pokazuję aktualny ping bota oraz API**")
    .setFooter(`KxpBOTv2(beta)`)

    message.channel.send(ipEmbed)
    message.delete()
 }

 if(args[0] == "info-pomoc"||"i-pomoc"||"ip") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Pomoc**")
    .setDescription("**Wyświetlam listę komend, które są w bocie**")
    .addField("**Dostępne Skróty:**", '\`k!p`\n`k!Pomoc`\n`k!Komendy`', true)
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }


 if(args[0] == "info-report"||"i-r"||"ir") {
    let irEmbed = new Discord.MessageEmbed()
    .setColor(colours.zielony)
    .setTitle("**Info - Report**")
    .addField("**Sposób użycia:**", '`\n`k!report #channel <@Member> <powod>`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`k!r`\n`', true)
    .setDescription("**Po wpisaniu:** `k!r #channel @member powod` **Wysyłam na oznaczony kanał autora komendy, osobę oznaczoną oraz powód!**", true)
    .setFooter(`KxpBOTv2(beta)`)

    message.channel.send(irEmbed)
    message.delete()
 }

 if(args[0] == "info-serverinfo"||"i-serverinfo"||"is"||"i-si") {
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - ServerInfo**")
    .addField("**Sposób użycia:**", '\`k!serverinfo`\n', true)
    .addField("**Dostępne Skróty:**", '\`k!si`\n`k!serverdsc`\n`k!sinfo`', true)
    .setDescription("**Pokazują informację o twoim serwerze!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})
    
    message.delete();
 }

 if(args[0] == "info-unmute"||"i-unmute"||"iu"){
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Unmute**")
    .addField("**Sposób użycia:**", '\`k!unmute <@member>`\n', true)
    .addField("**Dostępne skróty:**", '\`k!unm`', true)
    .setDescription("**Odciszam oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
 }

 if(args[0] == "info-uptime"||"i-u") {
    let iuEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Uptime**")
    .addField("**Sposób użycia:**", '`\n`k!uptime`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`k!up`\n`k!u`\n`', true)
    .setDescription("**Pokazuję przez ile: dni, godzin, minut oraz sekund bot jest online!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send(iuEmbed)
    message.delete();
 }

 if(args[0] == "info-userinfo"||"i-userinfo"||"i-ui"){
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - UserInfo**")
    .addField("**Sposób użycia:**", '\`k!userinfo`\n', true)
    .addField("**Dostępne skróty:**", '\`k!user`\n`k!ui`', true)
    .setDescription("**Pokazuję informację o tobie!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})
    
    
    message.delete();
 }




}




module.exports.config = {
    name: "info",
    usage: "k!info <nazwa komendy>",
    aliases: ["i"],
    accessableby: "Members",
}