/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    arr = [];
    for (var i = 0; i < s.length; i++) {
        if(i%2 != 0) {
            temp = s.charCodeAt(i-1)+Number(s[i]);
            kkk = String.fromCharCode(temp)
            arr.push(kkk);
        }
        else {
            arr.push(s[i]);
        }
    }
    return arr.join('');
};

sss = "a1c1e1";


replaceDigits(sss);




// Example 1:

// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'
// Example 2:

// Input: s = "a1b2c3d4e"
// Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'
 