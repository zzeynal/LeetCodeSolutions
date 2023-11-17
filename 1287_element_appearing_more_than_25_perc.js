

var findSpecialInteger = function(arr) {
    let temp = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) { 
            if(arr[j] == arr[i]) {
                if(count == 0)
                    count = 1;
                temp = arr[j];
                count++;
                if(count > arr.length/4) {
                    return temp;
                }
                else {
                    continue;
                }
            }
        }
        count = 0;
    }
};

sss = [1,2,3,3]

findSpecialInteger(sss);

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6