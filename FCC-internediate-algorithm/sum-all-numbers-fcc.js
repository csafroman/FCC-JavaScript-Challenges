function sumAll(arr) {
	// assign the maximum and minimum numbers in the array to 2 variables.
	var min = Math.min.apply(null, arr);
  	var max = Math.max.apply(null,arr);
  	// run a while loop to push all the numbers between max and min in the array.
  	while (min < (max-1)){
    	min++;
    	arr.push(min);
 	}
 	// reduce the array to the sum of all the number elements and return the value.
  	return arr.reduce(function(a,b){
    	return a+b;
  	},0);
}