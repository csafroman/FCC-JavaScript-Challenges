function reverseString(str) {
	//split the string into an array containing the individual characters of the string.
	//Use quotations without any spaces in between as a parameter for the split function.
	arr = str.split("");
	//call the reverse function to reverse order of the indicidual characters in the array.
	str = arr.reverse();
	//call the join function to join individual characters of the array into a string.
	//Use quotations without any spaces in between as a parameter for the join function.
	str = str.join("");
	return str;
}