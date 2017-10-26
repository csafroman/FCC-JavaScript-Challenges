function factorialize(num) {
 	myArray = [];
  	//write an if function to check if the num parameter is 0 or any other number. 
  	if (num ==0){
    	//if num is 0 then return 1 since 0! = 1 and that is the only exception. 
    	return 1;
  	} else {
  		/*if it is any positive number other than 0 then run a for loop as long 
  		as a var i is less than or equal to 'num'.*/
  		for (i=1;i<=num;i++){
     	//push 'i' in an array.
    	myArray.push(i);
  	}
  	/*run a reduce function on the array to give one value which is the product 
  	of all the numbers of the array. Return said array */
  	return myArray.reduce(function(previousVal, currentVal){return previousVal*currentVal;});
	}
}