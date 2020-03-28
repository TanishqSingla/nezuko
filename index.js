//?Adding Discord
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

//? Adding utilities
const basic = require("./utils/basic");

//?Code for bot
client.once("ready", () => {
  console.log("Ready!");
});

//? help command
client.on("message", msg => {
  if (msg.content.startsWith(`${prefix}help`)) {
    basic.help(help => {
      msg.channel.send(help);
    });
  }
});

//?This statement makes the bot work
client.login(token);
