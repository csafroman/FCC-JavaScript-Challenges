function diffArray(arr1, arr2) {
  // run a for loop tp iterate through every element of arr1.
  for (i=0;i<arr1.length;i++){
    // run a for loop within the first loop to iterate through every element of arr2.
    for (j=0;j<arr2.length;j++){
      // if any element of arr1 matches any element of arr2 then delete such elements from both arr1 and arr2.
      if (arr2[j] == arr1[i]){
        delete arr2[j];
        delete arr1[i];
      }
    }
  }
  // use filter function with boolean as the argument to get only the truthy values and assign them to the variables.
  arr2 = arr2.filter(Boolean);
  arr1 = arr1.filter(Boolean);
  //concatinate the two arrays to form a new array 'arr3' and then return arr3.
  var newArr = arr2.concat(arr1);
  return newArr;
}