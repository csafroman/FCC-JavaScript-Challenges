function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/[^A-Za-z0-9]/g, '-');
  str = str.split('');
  var index = [];
  for(i=1;i<str.length;i++){
    if(str[i] == str[i].toUpperCase()){
      if(str[i] != '-' && str[i-1] != '-'){
        index.unshift(i);
      }
    }
  }
//   return index
  for(j=0;j<index.length;j++){
    str.splice(index[j],0,'-');
  }
  str = String.prototype.toLowerCase.apply(str).split(",");
  str = str.join('');
  
  return str;
}