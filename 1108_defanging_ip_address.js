/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let arr = []
    for (let index = 0; index < address.length; index++) {
        const element = address[index];
        if(address[index] != ".") {
            arr.push(address[index])
        }
        else if (address[index] == ".") {
            arr.push("[.]")
        }
    }
    arr = arr.join("")
    //console.log(arr)
    return arr;
};


s = "1.1.1.1"

defangIPaddr(s);