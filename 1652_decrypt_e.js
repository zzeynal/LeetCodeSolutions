
var decrypt = function(code, k) {
    let arr = [];

    for (var i = 0; i < code.length; i++) {
        if(k>=0) {
            let m  = 0;
            let temp = k;
        for(let j=1; j<=temp; j++) {
            if((j+i)!=code.length) {
                m = m+code[i+j];
                let modulo = 0
                modulo = ((i+j)%code.length);
            }
            else if((j+i) == code.length) {
                temp = temp-j;
                j = 0;
                m = m+code[j];
            }
        }
        //arr[i]=m;
        arr.push(m);
            
            // if(i == code.length-1) {

            // }
            // else if(i == 0) {
            //     m = code[k-(i+2)]+code[k-(i+1)]+code[k-i]
            //     arr.push(m);
            // }
            // for (var j = 0; j < k; j++) {
                
                
            // }
        }
        else if(k<0) {
        }
        else if(k == 0) {
        }
    }
    
};

let acode = [5,7,1,4], kkk = 3;

decrypt(acode, kkk);

// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. 
// The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
