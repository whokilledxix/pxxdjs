const Discord = require("discord.js");
const colors = require("./colours.json");
const config = require("./botconfig.json");

module.exports = async (client, guild, user) => {
  if (user.bot) return;
  const ban = await guild.fetchBan(user);
  const log = await guild.fetchAuditLogs({ type: 22, limit: 1, user: [user]});
  let embed = new Discord.MessageEmbed()
    .setTitle("**Zbanowano użytkownika!**")
    .setColor(colors.red)
    .setThumbnail(user.displayAvatarURL())
    .addField("Zbanowany", `${user} | ${user.tag}`, true) //dodaje wzmiankę użytkownika w celu zidentyfikowania go po zmianie nicku.
    .addField("Banujący", `${log.entries.first().executor} | ${log.entries.first().executor.tag}`, true)
    .addField("Powód", `${ban.reason ? ban.reason : 'Brak'}`)
    .setTimestamp()
    .setFooter(`ID: ${user.id}`);
  let channel = guild.channels.cache.find(x => x.name === "logs");
  channel.send(embed);
};
