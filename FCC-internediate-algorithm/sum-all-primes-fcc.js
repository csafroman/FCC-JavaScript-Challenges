function sumPrimes(num) {
  var arr = [];
  
  for (i=2;i<num+1;i++){
    arr.push(i);
  }
  
  var primes = arr.filter( function(n){ 
    var m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  
  return primes.reduce(function(a,b){
    return a+b;
  });
}