function getIndexToIns(arr, num) {
	// use the push function to add 'num' to the end of 'arr'
	arr.push(num);
	/* use the sort function on 'arr' with a compare function as the parameter which will 
	sort the array in an ascending order. */	 
	arr.sort(function(a,b){
    return a-b;
  	});
// use the indexof function to get the index number of 'num' in 'arr' after it has been sorted.  	
return arr.indexOf(num);
}