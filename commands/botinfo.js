const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

  let bicon = bot.user.displayAvatarURL;

  let botembed = new Discord.RichEmbed()

  .setAuthor("❯ Wave Bot", bicon)

  .setColor("#00fff2")

  .setThumbnail(bicon)

  .addField("**❯ Author**", "Snowman#0019")

  .addField("**❯ Library**", "discord.js",true)

  .addField("**❯ Version**", "1.0.0",true)

  .addField("**❯ Invite**", "soon")

  .addField("**❯ Support server**", "soon")

  .addField("**❯ Created On**", bot.user.createdAt.toDateString());



  return message.channel.send(botembed);

}

module.exports.help = {

  name: "botinfo"

}
