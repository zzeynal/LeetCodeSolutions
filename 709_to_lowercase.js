/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = ""
    for (var i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            result += (String.fromCharCode(s.charCodeAt(i)+32));
        }
        else
        {
            result += String.fromCharCode(s.charCodeAt(i));
        }
    }
    return result;
};

s = "Hello"
toLowerCase(s);


// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"