const Discord = require("discord.js")




module.exports = bot => {
    
    
    console.log(`${bot.user.username} działa!`)
    // bot.user.setActivity("Mój prefix to .", {type: "PLAYING" });
    let statuses = [
        `${bot.guilds.size}`,
        ".",
        "Mój prefix to ."
    ];
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity("PXX BOT", {type: "WATCHING"});
    }, 70000)


    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity("Prefix - .", {type: "PLAYING"});
    }, 80000)
  
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity("Oznacz mnie, po więcej informacji!", {type: "LISTENING"});
  }, 60000)
}