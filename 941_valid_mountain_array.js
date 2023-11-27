var validMountainArray = function(arr) {
    let increasing = false;
    let pick = false;
    let decreasing = false;
    pickCount = 0;

    if(arr.length == 2 ) {
        return false;
    }

    for(let i = 1; i <= arr.length; i++) {
        if(arr[i] == arr[i+1]) { 
            return false;
        }

        if(arr[i-1] > arr[i] && arr[i] < arr[i+1]) {
            return false;
        }

        if(arr[i-1] < arr[i]) {
            if(arr[i] > arr[i+1]) {
                pick = true;
                pickCount++;
                for(let j = i; j < arr.length; j++) { 
                    if(arr[j] > arr[j+1]) { 
                        decreasing = true;
                    }
                    else if((arr[j] < arr[j+1]) || (arr[j] == arr[j+1])){
                        decreasing = false;
                        break;
                    }
                }
                if(increasing && pick && decreasing) {
                    return true;
                }
                else {
                    return false;
                }
            }
            
        }

        if(pick && pickCount == 1) {
            if(arr[i] < arr[i+1]) {
                decreasing = false;
                pickCount++;
            }
        }

        if(pick && pickCount > 1 && arr[i] > arr[i+1]) {
            decreasing = false;
        }


    }
    if(increasing && pick && decreasing) {
        return true;
    }
};

// sss = [0,3,2,1];

// sss = [1,3,2];

//sss = [0,1,2,1,2];

//sss = [3,7,6,4,3,0,1,0];

sss = [2,1,2,3,5,7,9,10,12,14,15,16,18,14,13];

validMountainArray(sss);

// Example 1:
// Input: arr = [2,1]
// Output: false

// Example 2:
// Input: arr = [3,5,5]
// Output: false

// Example 3:
// Input: arr = [0,3,2,1]
// Output: true