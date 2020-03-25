const Discord = require("discord.js")




module.exports = bot => {
    
    
    console.log(`${bot.user.username} działa!`)
    // bot.user.setActivity("Mój prefix to k!", {type: "PLAYING" });
    let statuses = [
        `${bot.guilds.size}`,
        "k!p",
        "Mój prefix to k!"
    ];
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity("📋Komendy- k!p", {type: "WATCHING"});
    }, 5000)


    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity("Mój prefix to - k!", {type: "PLAYING"});
    }, 5000)
}