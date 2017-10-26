function titleCase(str) {
 	/*call the split function with a space as the parameter to get an array 
 	of all the words in 'str'.*/
 	str = str.split(' ');
 	//run a for loop as long as 'i' is less than the length of 'str'.
  	for (i=0;i<str.length;i++){
  		//convert all the elements of the array to lowercase.
    	str[i] = str[i].toLowerCase();
    	/*split all the string elements of 'str' to get subarrays of all the 
    	individual letters in each string element.*/
    	str[i] = str[i].split('');
    	//convert the first element of each subarray to upper case. 
    	str[i][0] = str[i][0].toUpperCase(); 
    	//join the individual subarrays to get back an array of words.
    	str[i] = str[i].join('');
  	}
  	/*after the loop is done executing join the array of words with a space as a 
  	parameter get a titlecase sentence */
  	return str.join(' ');
}