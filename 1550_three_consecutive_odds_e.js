

var threeConsecutiveOdds = function(arr) {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if((arr[i]%2 > 0) && (arr[i+1]%2 > 0) && (arr[i+2]%2 > 0)) {
            console.log("true");
                return true;
        }
    }
    console.log("false");
    return false;
};


sss = [2,6,4,1];

threeConsecutiveOdds(sss);

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.
