const utils = require("./utils");

module.exports = {
  name: "kill",
  description: "A fun command",
  guildOnly: true,
  execute(msg) {
    let random = Math.floor(utils.killPrompt.length * Math.random());
    msg.channel.send(utils.killPrompt[random]);
  }
};
