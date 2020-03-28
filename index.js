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
	if (msg.content.startsWith(`${prefix}help`)) {
		basic.help(help => {
			msg.channel.send(help);
		});
	}
	//? clear command
	//TODO review the below command
	if (msg.content.startsWith(`${pre}clear`)) {
		try {
			let count = msg.content.split(" ")[1];
			msg.channel.bulkDelete(count);
		} catch (e) {
			msg.channel.send("Oops something went wrong");
			console.log(e);
		}
	}
});

//?This statement makes the bot work
client.login(token);
