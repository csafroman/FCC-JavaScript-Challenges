function chunkArrayInGroups(arr, size) {
  var slicedArr = [];
  var newArr = [];
  var i = 1;
  var j = 0;
  //run while loop till the given condition is ssatisfied.
  while (i<=Math.ceil((arr.length)/size)){
    //slice the arr parameter based on the conditions given.
    slicedArr = arr.slice(j,size+j);
    //push the sliced arrays into a new array.
    newArr.push(slicedArr);
    //increment 'i' variable by 1 and 'j' variable by the size parameter.
    i++;
    j+=size;
  }
  //after the entire loop is executed return the new array is which the sliced aarays were pushed.
  return newArr;
}