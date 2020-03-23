const wFilter = cont => {
  let words = [
    "nigga",
    "cunt",
    "cuck",
    "slut",
    "thot",
    "cnut",
    "nigg",
    "nigger",
    "fucker"
  ];
  let contArray = cont.toLowerCase().split(" ");
  for (let i in contArray) {
    for (let j in words) {
      if (contArray[i] === words[j]) {
        return true;
      }
    }
  }
  if (wFilter == undefined) {
    wFilter = false;
  }
};

module.exports = wFilter;
