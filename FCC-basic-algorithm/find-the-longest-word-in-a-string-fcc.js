function findLongestWord(str) {
  	//split the string into an array of the individual words.
  	str = str.split(' ');
  	var maxLength = 0;
  	//run a for loop as long as var 'i' is less the length of the array. 
  	for (i=0;i<=str.length-1;i++){
  		//if length of the string in the array is more than 'maxlength'.  
    	if (maxLength<str[i].length){
    	//assign the length of the string to 'maxlength'	
      		maxLength = str[i].length;
    	}
  	}
  	//after the entire loop is dont executing then return the value of 'maxlength'.
  	return maxLength;
}