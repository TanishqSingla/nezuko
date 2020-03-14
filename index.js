const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

//? A feature to hide nezuko
var day = false;

//? Bad word filter trigger
var bWord = true;

client.on("message", message => {
  //! n?kill command prompts
  let killPrompt = [
    `Isn't that illegal`,
    `Stop killing people, Baka!`,
    `Stop your slaughter party`,
    `hmmph hmmph, hmmph`,
    `You tried to kill a stranger but he smacked you in face`,
    `Your sword slipped from your hand while swinging and hit your head`
  ];

  let killPromptLen = killPrompt.length;
  // ! n?kill command
  if (message.content.startsWith(`${prefix}kill`)) {
    let random = Math.floor(Math.random() * (killPromptLen + 1));
    message.channel.send(killPrompt[random]);
  }
  //  ! n?help command or n? prompt for help
  if (message.content === `${prefix}` || message.content === `${prefix}help`) {
    message.channel.send(`
      For now you can use the following command:
      The prefix for all the commands is \`n?\`
      > \`kill\`: This command is just for fun.
      > \`help \`: This command opens up the help pallete.
      > \`punch\`: :warning: This command in under maintainence :warning:
      > \`clear\`: This clears the chat section
    `);
  }

  /* *
  ! n?punch command 
  TODO - complete the punch command with mentions
  **/

  if (message.content.startsWith(`${prefix}punch`) && !day) {
    //?fun case
    if (message.content === `${prefix}punch tanjiro`) {
      message.channel.send(`Don't you even think about it`);
    } else {
      message.channel.send(
        `:warning: Under Construction :man_construction_worker:`
      );
    }
  }

  // ! n?day command
  if (message.content.startsWith(`${prefix}day`)) {
    let bool = message.content.split(" ")[1];

    if (bool == "true") {
      day = true;
      message.channel.send(`Oh no! it's day. *nezuko hides*`);
    } else if (bool == "false" && day == true) {
      message.channel.send(
        `Phew! did you missed me? but don't worry once I reverse the curse of Muzan the day won't scare me`
      );
      day = false;
    } else {
      message.channel.send(`It's already night`);
    }
  }

  //!<---n?clear command

  if (message.content.startsWith(`${prefix}clear`) && !day) {
    let count = message.content.split(" ")[1];
    if (count != null) {
      message.channel.bulkDelete(count);
    } else {
      message.channel.send(`oops! looks like the number of message is missing`);
      message.channel.bulkDelete(1);
    }
  }
  // TODO make the following commannds for admins only
  //? bad word filter trigger
  if (message.content.startsWith(`${prefix}filter`)) {
    let key = message.content.split(" ")[1];
    if (key == "on") {
      bWord = true;
      message.channel.send("Bad Words filter is on");
    } else if (key == "off") {
      bWord = false;
      message.channel.send("Bad Words filter is off");
    } else {
      message.channel.send("Please specify `on` or `off` value");
    }
  }
  // ! word filter for nezuko
  let badWords = [
    "nigga",
    "cunt",
    "cuck",
    "slut",
    "thot",
    "cnut",
    "nigg",
    "nigger",
    "fucker"
  ];
  if (badWords.some(w => message.content.includes(w)) && bWord) {
    let sender = message.author;
    message.channel.bulkDelete(1);
    message.channel.send(`Watch your language ${sender}`);
    setTimeout(() => {
      message.channel.bulkDelete(1);
    }, 300);
  }
});

client.login(token);
