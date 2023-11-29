var restoreString = function(s, indices) {
    let arr = [];
    for(let i = 0; i < s.length; i++) {
         arr[indices[i]]=s[i];
    }
    return arr.join("");
};

sss = "codeleet", 
inx = [4,5,6,7,0,2,1,3]

restoreString(sss, inx);