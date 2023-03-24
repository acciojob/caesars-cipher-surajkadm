// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encryptstr){
	var words = str.split(" ");
	var decodedArr=[];
	for (let index = 0; index < words.length ; index++) {
		var word=words[index];
		var decodedWord="";
		for(var j=0;j<word.length;j++){
			var singleWord =word.charAt(j);
			var decodedsingle=lookup[singleWord]
			decodedWord+=decodedsingle;
		}
		decodedArr.push(decodedWord)
	}
	return decodedArr.join(" ")
}

module.exports = rot13;