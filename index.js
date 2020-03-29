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
	const author = msg.author;
	if (msg.content.startsWith(`${prefix}help`)) {
		basic.help(help => {
			msg.channel.send(help);
		});
	}
	//? clear command
	if (msg.content.startsWith(`${prefix}clear`)) {
		try {
			let count = msg.content.split(" ")[1];
			msg.channel.bulkDelete(count);
		} catch (e) {
			msg.channel.send("Oops something went wrong");
			console.log(e);
		}
	}
	//? <----- Word filter
	if (basic.badWords.some(w => msg.content.toLowerCase().includes(w))) {
		msg.delete();
	}
	//? -------->
});

//?This statement makes the bot work
client.login(token);
