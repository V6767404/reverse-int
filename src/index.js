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
// Three Ways to Reverse a String in JavaScript
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
