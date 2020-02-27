const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  //! n?kill command prompts
  let killPrompt = [
    `Isn't that illegal`,
    `Stop killing people, Baka!`,
    `Stop your slaughter party`,
    `hmmph hmmph, hmmph`,
    `The knife you threw bounced back and pierced your shoulder, now stop this stupid games of your`
  ];

  let pre = message.content; //message.content was annoying so I assigned it to a variable 'pre'
  let killPromptLen = killPrompt.length;
  // ! n?kill command
  if (pre.startsWith(`${prefix}kill`)) {
    let random = Math.floor(Math.random() * killPromptLen);
    message.channel.send(killPrompt[random]);
  }
  //  ! n?help command or n? prompt for help
  if (pre === `${prefix}` || pre === `${prefix}help`) {
    message.channel.send(
      `Looks like you need help\n:sob: well the help prompt is still not ready, I'll try my best next time`
    );
  }

  /* *
  ! n?punch command 
  TODO complete the punch command with mentions
  **/

  if (pre.startsWith(`${prefix}punch`)) {
    //fun case
    if (pre === `${prefix}punch tanjiro`) {
      message.channel.send(`Don't you even think about it`);
    } else {
      message.channel.send(
        `:warning: Under Construction :man_construction_worker:`
      );
    }
  }

  // * <---Commands for those who can manage permission
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    //!<---n?clear command
    if (pre.startsWith(`${prefix}clearChat`)) {
      let count = message.content.split(" ")[1];
      if (count != null) {
        message.channel.bulkDelete(count);
      } else {
        message.channel.send(
          `oops! looks like the number of message is missing`
        );
        message.channel.bulkDelete(1);
      }
    }
    // * ---> end of n?clear
  }
});

client.login(token);
