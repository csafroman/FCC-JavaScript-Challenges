function repeatStringNumTimes(str, num) {
  	//run a if function to check if the 'num' var is negative or not.
  	if (num<0){
  		//if the num is negative then return an empty string.
    	return "";
  	} else {
  		/*otehrwise call the repeat function on the string with the 'num' as the value of the 
  		parameter and assign that value to str.*/ 
    	str = str.repeat(num);
    	//return the value of 'str'.
    	return str;
  	}
}