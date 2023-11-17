

var replaceElements = function(arr) {
    let newArr = [];
    let temp = 0;
    let preNum = 0;
    let postNum = 0;
    let size = arr.length;
    // let size2 = size;
    for(let i = 0; i<size; i++) {
        preNum = arr[i+1];
        if(i==size-2) {
            arr[i] = arr[i+1]
            arr[i+1]=-1;
            break
        }
        temp = arr[i+1];
        for(let j = i+1; j<size; j++) {
            // preNum = arr[i+1];
            postNum = arr[j+1];
            // if(j==size-1 && postNum == undefined) {
            //     temp = arr[j];
            //     break;
            // }
            if(arr[i+1]<arr[j+1] && temp < arr[j+1]) {
                temp = arr[j+1]
                arr[i] = temp;//arr[j+1];
            }
            else if(arr[j+1]<arr[i+1] && temp < arr[i+1]) {
                temp = arr[i+1]
                arr[i] = temp;//arr[i+1];
            }
            else if (temp == arr[i+1]) {
                arr[i] = temp;
            }
        }
        // newArr.push(temp);
        
    }
    
};


hello = [17,18,5,4,6,1];

replaceElements(hello);

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.