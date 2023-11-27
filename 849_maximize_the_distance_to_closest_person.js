var maxDistToClosest = function(seats) {
    //case 1: find the distance b/w 2 people and find the mid: [1,0,0,0,1,0,1]
    //case 2: find the first person sitting from the left: [0,0,0,0,1]
    //case 3: find the first person sitting from the right: [1,0,0,0,0,0] 
let count = 0;
let result = 0;

for(let i = 0; i<seats.length; i++) {
    if(seats[i] == 1) {
        count = 0;
    }
    else {
        count++;
        result = maxValue(result, (count+1)/2);
    }
}

for(let i = 0; i < seats.length; i++) {
    if (seats[i] == 1) {
        result = maxValue(result, i);
        break;
    }
}

for(let i = seats.length-1; i >= 0; i--) {
    if(seats[i] == 1) {
        result = maxValue(result, seats.length-1-i);
        break;
    }
}

return result;

};

var maxValue = function(x, y) { 
    var max = (x > y)? x : y;
    return max;
}

//  sss = [1,0,0,0,1,0,1];

 sss = [1,0,0,1];

// sss = [1,0,0,0,1,0,0,0,0,0,0,];

// sss = [0,1,0,0,0,0]

// sss = [1,0,0,0]

// sss = [0,0,1];

maxDistToClosest(sss);

// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.