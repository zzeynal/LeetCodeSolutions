var mostWordsFound = function(sentences) {
    let max = 0;
    let count = 0;
    let temp = ""
    
    for(let i = 1; i < sentences.length; i++) {
        temp = sentences[i].split(" ");
        count = temp.length;
        if(count > max) {
            max = count;
        }
    }
    return max;
};


//sss = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

sss = ["mdvfv msyqqkvvxd fdmdtsrbyraehqqsjddolwjsvjzikzfly qtslivxksmoinggzzyhtzeowmyzdyqznxe zdedklztm sbp","bmxatmslntvcq mjxj vudzeeuwx rdogfchqxrnomcoejlmtjxdwxymbtr","lzmaakaqngysrrjpjmqqtdlxnjgejdzjpwtqijhdwqohuycctfxfxypozvgdsow","ydwhug ln ynbzqvfajeqp"]

mostWordsFound(sss);