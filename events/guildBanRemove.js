const Discord = require("discord.js");
const colors = require("./colours.json");
const config = require("./botconfig.json");

module.exports = async (client, guild, user) => {
  if (user.bot) return;
  const log = await guild.fetchAuditLogs({ type: 23, limit: 1, user: [user]});
  let embed = new Discord.MessageEmbed()
    .setTitle("**Odbanowano użytkownika!**")
    .setColor(colors.red)
    .setThumbnail(user.displayAvatarURL())
    .addField("Odbanowany", `${user} | ${user.tag}`, true) //dodaje wzmiankę użytkownika w celu zidentyfikowania go po zmianie nicku.
    .addField("Odbanowywujący", `${log.entries.first().executor} | ${log.entries.first().executor.tag}`, true)
    .setTimestamp()
    .setFooter(`ID: ${user.id}`);
  let channel = guild.channels.cache.find(x => x.name === "logs");
  channel.send(embed);
};
