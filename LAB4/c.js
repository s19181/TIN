const isPalindrome = (string) => {
   const arrOfChars = string.split("");
   const reverseString = arrOfChars.reverse().join("");
   const result = reverseString === string;
   return result;
}

console.log(isPalindrome("kek")); //true
console.log(isPalindrome("dog")); //false