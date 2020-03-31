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
  //? Discord parameters and commands
  const author = msg.author;
  const args = msg.content.slice(prefix.length).split(/ /);
  const command = args.shift().toLowerCase();
  const parameter = args.shift();

  //? help command
  if (command === "help") {
    basic.help(help => {
      msg.channel.send(help);
    });
  }

  //? clear command
  if (command === "clear") {
    try {
      msg.channel.bulkDelete(Number(parameter));
    } catch (e) {
      msg.channel.send("Oops something went wrong");
    }
  }

  //? Word filter
  if (basic.badWords.some(w => msg.content.toLowerCase().includes(w))) {
    msg.delete();
    msg.channel.send(`Watch your language ${author}`).then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 2000);
    });
  }

  if (command === "kill") {
    basic.kill(killMsg => {
      msg.channel.send(killMsg);
    });
  }
});

//?This statement makes the bot work
client.login(token);
