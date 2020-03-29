//This file contains the basic command and some resources
const help = callback => {
	const msg = `:warning: Under Maintainence :warning:`;
	callback(msg);
};

badWords = ["nigg", "cunt", "fucker", "nigga", "nigger", "cuck"];

killPrompt = [
	`Stop your slaughter party`,
	`isn't that illegal`,
	`you're a disgrace`,
	`You tried to stab but your knife slipped from your hand and pierced your toe`,
	`You threw a dagger but clearly misjudged the distance`
];

module.exports = {
	help,
	badWords
};
