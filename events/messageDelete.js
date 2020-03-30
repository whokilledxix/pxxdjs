const Discord = require("discord.js");
const colors = require("./colours.json");
const config = require("./botconfig.json");

module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.mentions.users.array().length > 0) {
    if (message.member.hasPermission('ADMINISTRATOR')) return;
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#0055ff")
      .setTitle("Użytkownik usunął wiadomość zawierającą wzmiankę:")
      .setDescription(message.content)
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp();
    message.channel.send(exampleEmbed);
  }
  let embed = new Discord.MessageEmbed()
    .setTitle("**Usunięta wiadomość**")
    .setColor(colors.red)
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Autor", `${message.author} | ${message.author.tag}`, true) //dodaje wzmiankę użytkownika w celu zidentyfikowania go po zmianie nicku.
    .addField("Kanał", `${message.channel}`, true)
    .addField("Treść wiadomości",`${message.content ? message.content : "Brak"}`)
    .setTimestamp()
    .setFooter(`ID: ${message.id}`);
  let channel = message.guild.channels.cache.find(x => x.name === "logs");
  channel.send(embed);
};