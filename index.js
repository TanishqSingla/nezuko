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
  const commandName = args.shift().toLowerCase();
  const parameter = args.shift();

  const command = client.commands.get(commandName);

  //check for prefix
  const checkPrefix = msg.content.substring(0, 2) === prefix;

  //check for guild channel
  if (command.guildOnly && msg.channel.type !== "text") {
    return msg.reply("I can't execute that command inside DMs!");
  }

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
  if (commandName === "help") {
    try {
      command.execute(msg);
    } catch (e) {
      console.log(e);
    }
  }

  //? clear command
  if (commandName === "clear") {
    command.execute(msg, parameter);
  }

  //? Word filter

  if (commandName === "kill") {
    command.execute(msg);
  }

  console.log(msg.channel);
});

//?This statement makes the bot work
client.login(token);
