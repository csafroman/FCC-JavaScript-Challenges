function truncateString(str, num) {
  /*run a if, else statement to check if the length of the 'str' parameter 
  is less than 'num' parameter.*/
  if(str.length<=num){
    /*if str.length is less than 'num' then no need for truncating the string. 
    return 'str' as it is.*/
    return str;
  } else {
    //else run another if else statement to check if 'num' is less than or equal to 3.
    if (num<=3){
      //if 'num' is less than or equal to 3 then call the slice function as shown and assign to 'str'.
      str = str.slice(0, num) + "...";
      //return str.
      return str;
    } else {
      //if number is greater than 3 then call the string function as shown and assign to 'str'.
      str = str.slice(0, (num - 3)) + "...";
      //return 'str'.
      return str;
    }
  }
}