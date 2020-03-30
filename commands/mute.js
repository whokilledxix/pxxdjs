const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent");
const client = require("discord.js")


module.exports.run = async (bot, message, args) => {
    let mute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if (mute) {
      message.react('✅')
    }
    
    if (!mute) {
      message.react('❌')
    }
    
    if(!mute) return message.reply("Nie znaleziono użytkownika!")
    if(mute.hasPermission('ADMINISTRATOR')) return message.reply("Nie mam permisji do wyciszenia")
    let muterole = message.guild.roles.fetch(`name`, "Muted");
    if(!muterole){
        try{
         muterole = await message.guild.createRole({
             name: "muted",
             color: "#343536",
             permission: []
         })
         message.guild.channels.forEach(async (channel, id) => {
             await channel.overwritePermissions(muterole, {
                 SEND_MESSAGES: false,
                 ADD_REACTIONS: false,
             })
         })
        }catch(e){
            console.log(e.stack);
        }
    }await message.mentions.members.first().roles.add('688417859319234665');
    message.reply(`<@${mute.id}> został wyciszony!`)

    
}

    
module.exports.config = {
    name: "mute",
    usage: "k!mute <@user> <reason>",
    accesableby: "Members",
    aliases: ["m"]
};