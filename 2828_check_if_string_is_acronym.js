var isAcronym = function(words, s) {
    if(words.length!= s.length)
        return false;
    let arr = [];
    for(var i = 0; i < words.length; i++) {
        arr.push(words[i][0]);
    }
    if(arr.join('') == s)
        return true;
    return false;
};

w1 = ["alice","bob","charlie"];
s1 = "abc";

isAcronym(w1, s1);