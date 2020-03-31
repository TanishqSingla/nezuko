module.exports = {
  name: "clear",
  description: "Clears multiple messages",
  execute(msg, parameter) {
    msg.channel.bulkDelete(parameter);
  }
};
