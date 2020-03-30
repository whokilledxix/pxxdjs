const Discord = require("discord.js");
const colors = require("./colours.json");
const config = require("./botconfig.json");

module.exports = async (client, oldmsg, newmsg) => {
  if (oldmsg.author.bot) return;
  let embed = new Discord.MessageEmbed()
    .setTitle("**Aktualizacja wiadomości**")
    .setColor(colors.orange)
    .setThumbnail(oldmsg.author.displayAvatarURL())
    .addField("Autor", `${oldmsg.author} | ${oldmsg.author.tag}`, true) //dodaje wzmiankę użytkownika w celu zidentyfikowania go po zmianie nicku.
    .addField("Kanał", `${oldmsg.channel}`, true)
    .addField("Poprzednia wiadomość",`${oldmsg.content ? oldmsg.content : "Brak"}`)    
    .addField("Edytowana wiadomość",`${newmsg.content ? newmsg.content : "Brak"}`)
    .setTimestamp()
    .setFooter(`ID: ${oldmsg.id}`);
  let channel = oldmsg.guild.channels.cache.find(x => x.name === "logs");
  channel.send(embed);
};
