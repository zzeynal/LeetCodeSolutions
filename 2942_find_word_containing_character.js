var findWordsContaining = function(words, x) {
    let temp = "";
    let arr = [];

    for (var i = 0; i < words.length; i++) {
        temp = words[i];
        for (var j = 0; j < temp.length; j++) {
            if(temp[j] == x) {
                arr.push(i);
                break;
            }
        }
    }
    
}


sss = ["leet","code"], 
a = "e"

findWordsContaining(sss, a);