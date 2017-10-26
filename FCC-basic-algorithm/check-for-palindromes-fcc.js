function palindrome(str) {
  //convert the entire string to lowercase ans remove all the special chracters and spaces.
  str = str.toLowerCase().replace(/[\W_]/g, '');
  //split the string into an array containing all the characters in the string.
  str = str.split("");
  var i = 0;
  var j = 1;
  /*run a while loop to check if the first character matches the last, second 
  matches the second last and so on, till you reach the middle of the array.*/
  while(i<Math.ceil(str.length/2) && j<=Math.ceil(str.length/2)){
    if(str[i]!=str[str.length - j]){
      /*if even one of the letters don't match then return false and stop the execution of the 
      function as the word is not a plaindrome. */
      return false;
    } else {
      /*if the letters are matching then you increment the varaibles by 1 and run the loop 
      till the conditions are true.*/
      i++;
      j++;
    }
  }
  /*if the function is still executing after the loop then the word is a palindrome and 
  the function should return true.*/
  return true;
}