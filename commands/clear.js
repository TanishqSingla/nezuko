module.exports = {
  name: "clear",
  guildOnly: true,
  description: "Clears multiple messages",
  execute(msg, parameter) {
    msg.channel.bulkDelete(parameter);
  }
};
