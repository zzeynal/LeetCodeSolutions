/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let arr = ""
    for (let index = 0; index < address.length; index++) {
        const element = address[index];
        if(address[index] != ".") {
            arr = arr + address[index];
        }
        else if (address[index] == ".") {
            arr = arr + "[.]"
        }
    }
    //arr = arr.join(" ")
    //str = string.copyValueOf(arr)
    console.log(arr)
    
};


s = "1.1.1.1"

defangIPaddr(s);