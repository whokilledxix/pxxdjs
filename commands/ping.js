const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   message.channel.send("Ping.....").then(m =>{
       let ping = m.createdTimestamp = message.createdTimestamp
       if (ping) {
      message.react('✅')
    }
    
    if (!ping) {
      message.react('❌')
    }
       
       let choices = ["Na prawdę to jest mój ping?", "Czy jest to okey? Nie mogę zobaczyć!", "Myślę że to nie wygląda źle!"]
       let response = choices[Math.floor(Math.random() * choices.length)]

       m.edit(`${response} Ping Bota: ${ping}, Ping API: ${Math.round(bot.ping)}`)
  })
    
}


module.exports.config = {
    name: "ping",
    usage: "k!ping",
    accessableby: "Members",
    aliases: ["pong"]

}