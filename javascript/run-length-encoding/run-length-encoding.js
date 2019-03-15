export const encode = str => {
    let encoded = '';
    let charCounter = 0;

    let i = 0;
    while (i < str.length) {

        const currChar = str[i];

        for (let o = i; o < str.length; o++) {
            if (currChar == str[o]) {
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
    }
    return encoded;
};

export const decode = encoded => {
    let strNum = '';
    let decoded = '';

    for (let i = 0; i < encoded.length; i++) {
        let currChar = encoded[i];

        //Checking if the character is a number
        if (!isNaN(parseInt(currChar))) {
            strNum += currChar;
            continue;
        }

        //If it is not
        else {
            if (strNum == '') {
                decoded += currChar;
            }
            else {
                for (let e = 0; e < parseInt(strNum); e++) {
                    decoded += currChar;
                }
            }
        }
        //Reset the str after the operations
        strNum = '';
    }
    return decoded;
};

//// "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB" ✅
// "AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE" ✅
// "12WB12W3B24WB" -> "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB ✅
