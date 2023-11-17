

var nearestValidPoint = function(x, y, points) {
    let resI = -1;
    let min = +Infinity;
    for(let i = 0; i< points.length; i++) {
        let[pointX, pointY] = points[i];
        if(x != pointX && y != pointY)
            continue;
        if(distance(x,y,pointX,pointY)<min){
            min = distance(x,y,pointX,pointY);
            resI = i;
        }
    }
    return resI;

}

function distance(x1,y1,x2,y2) {
    let temp = ((x1-x2)+(y1-y2))
    var abs = (temp < 0) ? (temp * -1) : temp;
    return abs;
}


a = 3; 
b = 4; 
dots = [[1,2],[3,1],[2,4],[2,3],[4,4]];

nearestValidPoint(a, b, dots);


// Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
// Output: 2
// Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. 
// Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance 
// from your current location, with a distance of 1. [2,4] has the smallest index, 
// so return 2.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is 
// abs(x1 - x2) + abs(y1 - y2).

