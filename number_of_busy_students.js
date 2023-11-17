

var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    let startT = 0;
    let endT = 0;
    for(let i = 0; i<startTime.length; i++) {
        startT = startTime[i];
        endT = endTime[i];
        if((startT)<=queryTime && (queryTime<=endT)) {
            count++;
        }
    }
    return count;
    
}

sT = [1,2,3];
eT = [3,2,7];
qT = 4;

busyStudent(sT, eT, qT);

// Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
// Output: 1
// Explanation: We have 3 students where:
// The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
// The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
// The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.