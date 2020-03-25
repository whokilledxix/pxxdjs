const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGE", "ADMINISTRATOR"])) return message.channel.send("``Nie możesz użyć tej komendy!``")

    let argsresult;
    let mChannel = message.mentions.channels.first()
    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}


module.exports.config = {
    name: "say",
    usage: "k!say <wiadomosc>",
    accessableby: "Staff",
    aliases: ["s",]
}