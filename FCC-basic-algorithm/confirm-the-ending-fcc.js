function confirmEnding(str, target){
  //remove all the special characters from the string.
  str = str.replace(/[\W_]/g, '');
  /*use the substring function to get a new string from the end of str parameter 
  which is = length of the target parameter*/  
  str = str.substring(str.length-target.length);
  /*run a if statement to check if the new substring matches the target and 
  return true if it does or return false if it does not.*/
  if (str==target){
    return true;
  }{
    return false;
  }
}