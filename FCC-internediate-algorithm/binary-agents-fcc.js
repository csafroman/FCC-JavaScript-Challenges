
function binaryAgent(str) {
  str = str.split(' ');
  str = str.map(function(x){return String.fromCharCode(parseInt(x,2));});
  return str.join('');
}