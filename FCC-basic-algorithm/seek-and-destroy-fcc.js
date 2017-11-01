function destroyer(arr) {
  // run for loop for every element of 'arr'
  for (var j=0;j<arr.length;j++) {
    // run a for loop within the first loop for every element of arguments except for the first one which is 'arr' itself
    for (var k=1;k<arguments.length;k++) { // arguments is an array like object that consists of all the paramenters of the parent function.
      //run a if statement that deletes any element of 'arr' that macthes any element of arguments.
      if (arr[j] === arguments[k]) {
        delete arr[j];//using the delete method leaves null value in the array in place where the element used to be
      }
    }
  }
  //call the filter function on 'arr' with Boolean as the parameter to remove all the null values from the array.
  return arr.filter(Boolean);
}