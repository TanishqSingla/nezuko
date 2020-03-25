//! n?help command
const help = callback => {
  const message = `For now you can use the following command:
	The prefix for all the commands is \`n?\`
	> \`kill\`: This command is just for fun.
	> \`help \`: This command opens up the help pallete.
	> \`punch\`: :warning: This command in under maintainence :warning:
	> \`clear\`: This clears the chat section`;

  callback(message);
};

module.exports = {
  help
};
