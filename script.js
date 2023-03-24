// Your Script here.
function rot13(encryptstr){
	var words = str.split(" ");
	var decodedArr=[];
	for (let index = 0; index < words.length ; index++) {
		var word=words[index];
		var decodedWord="";
		for(var j=0;j<word.length;j++){
			var singleWord=word.charAt(j)
			var decodedsingle=(singleWord.charCodeAt(0)-13);
			decodedWord+=decodedsingle;
		}
		decodedArr.push(decodedWord)
	}
	return decodedArr.join(" ")
}

module.exports = rot13;