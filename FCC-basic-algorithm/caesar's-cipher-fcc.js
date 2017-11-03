function rot13(str) {
  // declare 2 variables which are arrays.
  var arr = [];
  var arr2 = [];
  //run a for loop to push the unicode value of every letter in the string into an array.
  for(i=0;i<str.length;i++){
    arr.push(str.charCodeAt(i));
  }
  // run another for loop to iterate through every element of 'arr'.
  for (j=0;j<arr.length;j++){
    //convert the unicode value back to alphabets as per the relevant conditions.
    if (arr[j] <= 90 && arr[j] >=78){
      arr2.push(String.fromCharCode(arr[j]-13)); 
    } else if (arr[j] < 78 && arr[j] >= 65){
        arr2.push(String.fromCharCode(arr[j]+13));
    } else {
        arr2.push(String.fromCharCode(arr[j])); // all the chracters except for uppercase alphabets are to be converted as is
      }
    }
  return arr2.join('');
}