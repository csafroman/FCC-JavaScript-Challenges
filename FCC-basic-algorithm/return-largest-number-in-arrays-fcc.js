function largestOfFour(arr) {
  	var maxArr = [];
  	//run a for loop as long as 'i' is less than length of 'arr'.
  	for(i=0;i<arr.length;i++){
  		/*run a reduce function of each subarray of 'arr' to get the highest of the numbers. 
  		push the highest number into a new array.*/
    	maxArr.push(arr[i].reduce(function(a,b){return Math.max(a,b);}));
  	}
  	//after the entire loop is executed return 'maxArr' containing the largest number from each subarray.
  	return maxArr;
}