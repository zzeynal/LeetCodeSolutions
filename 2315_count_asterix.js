/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    countGate = 0;
    countStars = 0;
    for (var i = 0; i < s.length; i++) {
        if(s[i] == "|") {
            countGate++;
            module = countGate%2
        }
        if((countGate%2 === 0) && (s[i] == "*")) {
            countStars++;
        }
        else {
            continue;
        }
    }
    console.log(countGate + countStars);
    
};


sss = "l|*e*et|c**o|*de|";

countAsterisks(sss);



// Example 1:

// Input: s = "l|*e*et|c**o|*de|"
// Output: 2
// Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
// The characters between the first and second '|' are excluded from the answer.
// Also, the characters between the third and fourth '|' are excluded from the answer.
// There are 2 asterisks considered. Therefore, we return 2.
// Example 2:

// Input: s = "iamprogrammer"
// Output: 0
// Explanation: In this example, there are no asterisks in s. Therefore, we return 0.
// Example 3:

// Input: s = "yo|uar|e**|b|e***au|tifu|l"
// Output: 5
// Explanation: The considered characters are underlined: "yo|uar|e**|b|e***au|tifu|l". There are 5 asterisks considered. Therefore, we return 5.
