/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 1; i<strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            let lll = strs[i].indexOf(prefix);
            prefix = prefix.substring(0, prefix.length-1);
            let kkk = strs[i].indexOf(prefix);
            if (prefix === ""){
                return prefix;
            }
        }
    }
    return prefix;
}

// var longestCommonPrefix = function(strs) {
//     var arr = [];
//     if(strs.length == 1) {
//         arr.push(strs[0][0])
//         return arr.join('')
//     }
//     for (var i = 0; i < strs[i].length; i++) {
//         for (var j = 0; j <strs.length-1; j++) {
//             var ttt = strs[j][i];
//             var bbb = strs[j+1][i];
//             if(strs[j][i]==strs[j+1][i]) {
//                 continue;
//             }
//             else if(strs[j][i]!=strs[j+1][i] && arr == null) {
//                 return arr = ("");
//             }
//             else if(arr != null) {
//                 return arr.join('');
//             }
//         }
//         arr.push(strs[j][i]);
//     }
//     return arr.join('');
    
// };

strs = ["flower","flow","flight"]

// strs = ["a"]

longestCommonPrefix(strs)

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.