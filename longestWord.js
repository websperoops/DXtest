function longer(champ, contender) {
  if(champ.length === contender.length){
    let champVowelCount = champ.match(/[aeiou]/gi) || [].length;
    let contenderVowelCount = contender.match(/[aeiou]/gi) || [].length;
    return (champVowelCount.length > contenderVowelCount.length) ? champ : contender;
  }
  return (contender.length > champ.length) ? contender : champ;
}

function longestWord(str) {
  const withoutCommas = str.replace(/,/g, '');
  var words = withoutCommas.split(' ');
  return words.reduce(longer);
}

console.log(longestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));
