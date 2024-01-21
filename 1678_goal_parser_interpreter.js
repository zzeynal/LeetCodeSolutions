/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    arr = []
    for (var i = 0; i < command.length; i++) {
        a = command[i+1]
        if(command[i] != "(" && command[i] != ")") {
            arr.push(command[i])
        }
        else if(command[i] == "(" && command[i+1] == ")") {
            arr.push("o")
        }
    }
    arr = arr.join("");
    console.log(arr);
};


s = "G()()()()(al)"

interpret(s);


// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"