//Adding Discord
const Discord = require("discord.js");
const { prefix: pre, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", msg => {});

//This statement makes the bot work
client.login(token);
