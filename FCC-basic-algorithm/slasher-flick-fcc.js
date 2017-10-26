function slasher(arr, howMany) {
	/*9call the splice function to get 'howMany' number of elemets from 'arr' starting at the 0 index
	and assign it to the new variable*/
  	splicedArr = arr.splice(0,howMany);
  	//return arr after it has been spliced.
  	return arr;
}