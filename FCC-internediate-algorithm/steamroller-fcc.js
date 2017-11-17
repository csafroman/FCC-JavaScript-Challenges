
function steamrollArray(arr) {
  var flattenedArr = [];
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArr.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArr;
}