//?Adding Discord
const fs = require("fs");
const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

//Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  //? setting commands with their respective name
  client.commands.set(command.name, command);
}

//utils
const utils = require("./commands/utils");

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

  //check for prefix
  const checkPrefix = msg.content.substring(0, 2) === prefix;

  //* prefix and bot check
  if (!checkPrefix || author.bot) {
    if (utils.badWords.some(w => msg.content.toLowerCase().includes(w))) {
      msg.delete();
      msg.channel.send(`Watch your language ${author}`).then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 2000);
      });
    } else {
      return;
    }
  }

  //? help command
  if (command === "help") {
    client.commands.get("help").execute(msg);
  }

  //? clear command
  if (command === "clear") {
    client.commands.get("clear").execute(msg, parameter);
  }

  //? Word filter

  if (command === "kill") {
    client.commands.get("kill").execute(msg);
  }
});

//?This statement makes the bot work
client.login(token);
