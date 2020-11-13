function findLongestWord(sentence) {
    let maxWord = '';
    sentence.split(' ').forEach(x => x.length > maxWord.length && (maxWord = x));
    return maxWord;
}


console.log(findLongestWord('Hello my friend how, are you doing'));