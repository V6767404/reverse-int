module.exports = function reverse (n) {
    
    result = 0;
    n = Math.abs(n);
    
    while (n !== 0) {

        result *= 10;
        result += n % 10;

        n -= n % 10;
        n /= 10;
    }
    return result;
  
}

// return Number(Math.abs(n).toString().split('').reverse().join('')
// return +(('' + Math.abs(n)).split('').reverse().join(''))
/*
return +Math.abs(n)
.toString()
.split('')
.reverse()
.join('');
*/
