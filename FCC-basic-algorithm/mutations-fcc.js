function mutation(arr) {
	//covert both the elements of 'arr' to lowercase and assign them to 2 seperate variables
	arr[0] = arr[0].toLowerCase();
	arr[1] = arr[1].toLowerCase();
	//run a for loop as long as 'j' is less than the length of the second element of 'arr'.
  	for (j=0;j<arr[1].length;j++)
  		/*call the indexOf function on the first element searching for every letter of the second element
  		and compare the result with -1*/
    	if (arr[0].indexOf(arr[1][j]) === -1){
      		//return false if the condition above is satisfied.
      		return false;
    	}
    /*after the loop if the function is still executing it means that all the letters of element 2 
    are present in element 1 and the function should return true*/	 
  	return true;
}