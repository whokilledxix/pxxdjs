const Discord = require("discord.js")
const botconfig = require("../botconfig.json")
const { prefix } = require("../botconfig.json")


module.exports.run = async (bot, message, args) => {
    if(message.content.startsWith(prefix)){
    if(message.author.id != "894433798836613160") return message.channel.send("``Nie jesteś właścicielem bota!``")
  
    try{
        await message.channel.send("Bot jest wyłączany...")
        await message.channel.send("✅")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}
}


module.exports.config = {
    name: "shutdown",
    usage: ".shutdown",
    accessableby: "Bot Owner",
    aliases: ["s", "off"]
}