const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 
const { prefix } = require("../botconfig.json")


module.exports.run = async (bot, message, args) =>{
    
  
  if(message.content.startsWith(prefix)){
  
  
    let msg = await message.channel.send("Meow.....")

    let {body} = await superagent
    .get('http://aws.random.cat/meow')
    //console.log(body.file)
    if(!{body}) return message.channel.send("Zepsułem! Spróbuj ponownie!")
      

     let cEmbed = new Discord.MessageEmbed()
     .setColor(colours.jasnoniebieski)
     .setAuthor(`pxx bot CATS!`, message.guild.iconURL)
     .setImage(body.file)
     .setTimestamp()
     .setFooter(`Komendę wpisał:${message.author.username}`, `${message.author.displayAvatarURL()}`)
     
     message.channel.send({embed: cEmbed});

     msg.delete();
} 
}
module.exports.config = {
    name: "cat",
    aliases: ["kot", "koteczek", "c"]
}