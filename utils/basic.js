//This file contains the basic command and some resources
const help = callback => {
  const msg = `:warning: Under Maintainence :warning:`;
  callback(msg);
};

const badWords = ["nigg", "cunt", "fucker", "nigga", "nigger", "cuck"];

const killPrompt = [
  `Stop your slaughter party`,
  `isn't that illegal`,
  `you're a disgrace`,
  `You tried to stab but your knife slipped from your hand and pierced your toe`,
  `You threw a dagger but clearly misjudged the distance``hmmmph hmmmph`
];

const kill = callback => {
  let random = Math.floor(Math.random() * killPrompt.length);
  callback(`${killPrompt[random]}`);
};

module.exports = {
  help,
  badWords,
  kill
};
