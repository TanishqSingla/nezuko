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
	console.log(contArray);
	for (i in contArray) {
		for (j in words) {
			if (i === j) {
				return true;
				break;
			}
		}
	}
};

module.exports = wFilter();
