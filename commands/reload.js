const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    if(message.author.id != "394154957525352448") return message.channel.send("``Nie jesteś właścicielem bota!``")

    if(!args[0]) return message.channel.send("Proszę podaj komendę którą mam odświeżyć")

    let commandName = args[0].toLowerCase()
    
    
    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e){
        return message.channel.send(`Nie można odświeżyć: \`${args[0].toUpperCase()}`)
    }


    message.channel.send(`Komenda \`${args[0].toUpperCase()} została odświeżona!`)
}


module.exports.config = {
    name: "reload",
    usage: "k!reload",
    accessableby: "Bot Owner",
    aliases: ["r"]
}