const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 
const { prefix } = require("../botconfig.json")
module.exports.run = async (bot, message, args) =>{
   
  
  if(message.content.startsWith(prefix)){
  
  
  
     let msg = await message.channel.send("Hau-Hau.....")

        let {body} = await superagent
        .get('https://dog.ceo/api/breeds/image/random')
        //console.log(body.file)
        if(!{body}) return message.channel.send("Zepsułem! Spróbuj ponownie")
           
           let dEmbed = new Discord.MessageEmbed()
           .setColor(colours.fioletowy)
           .setAuthor(`KxpBOTv2 (beta) DOGS!`, message.guild.iconURL)
           .setImage(body.message)
           .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
           .setTimestamp()

           message.channel.send({embed: dEmbed});

           msg.delete();
}
}
module.exports.config = {
    name: "dog",
    aliases: ["pies", "piesek", "psiur"]
}