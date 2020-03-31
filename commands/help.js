const utils = require("./utils");

module.exports = {
  name: "help",
  desciption: "Contains info for nezuko",
  execute(msg) {
    msg.channel.send(utils.help);
  }
};
