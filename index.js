const Discord = require("discord.js");
const client = new Discord.Client();

//authorising with token
const { prefix: pre, token } = require("./config.json");

//adding chalk for debugging
const chalk = require("chalk");

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {});

client.login(token);
