var truncateSentence = function(s, k) {
    let arr = [];
    s = s.split(' ');
    for (var i = 0; i < k; i++) {
        arr.push(s[i]);
    }
    return arr.join(' ');
};

s1 = "Hello how are you Contestant";
k1 = 4;

truncateSentence(s1, k1);