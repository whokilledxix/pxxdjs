const Discord = require("discord.js")
const botconfig = require("../botconfig.json")


module.exports.run = async (bot, message, args) => {
    
    if(message.author.id != "394154957525352448") return message.channel.send("``Nie jesteś właścicielem bota!``")
  
    try{
        await message.channel.send("Bot jest wyłączany.....")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}



module.exports.config = {
    name: "shutdown",
    usage: "k!shutdown",
    accessableby: "Bot Owner",
    aliases: ["s", "off"]
}