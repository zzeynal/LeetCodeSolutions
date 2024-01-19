var prefixCount = function(words, pref) {

    let preLen = pref.length;
    let count = 0;
    for (let i = 0; i<words.length; i++){
        if(words[i][0] == pref[0]) {
            for(let j = 0; j <preLen; j++) {
                if(words[i][j]!= pref[j]) {
                    break;
                }
                if(j == preLen - 1) {
                    count++;
                }
            }
        }
    }
    return count;
    
};

w = ["pay","attention","practice","attend"];
p = "at"

prefixCount(w,p);