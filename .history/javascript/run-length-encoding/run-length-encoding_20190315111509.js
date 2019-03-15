
// "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"

const encode = (str) => { 
    let encoded = '';
    let charCounter = 0;

    let i = 0; 
    while (i < str.length) {
       
        const currChar = str[i];

        for (let o = i; o < str.length; o++) {
            if(currChar == str[o]) {
                charCounter += 1;
                i++;
            }
            else {
                break;
            }
        }
        if (charCounter !== 1) {
             encoded += charCounter;
             encoded += currChar;
         }
         else {
             encoded += currChar;
         }
         charCounter = 0;
         console.log(`charCounter: ${encoded}`);
    }
    return encoded;
};

console.log(encode('  hsqq qww  '));

// console.log(encode('aabbbcccc'))