////////////////////////////////////////////////////////////////////
// Example1.
// input : strs = {"flower", "flow", "flight"}
// output : "fl"
////////////////////////////////////////////////////////////////////
// Example2.
// input : strs = {"dog", "racecar", "car"}
// output : ""
// Wxplanation : There is no common prefix among the input strings.
////////////////////////////////////////////////////////////////////
// Constraints.
// 1. 1 <= strs.lenght <= 200
// 2. 0 <= strs[i].lenght <= 200
// 3. strs[i] consists of only lowercase English letters

////////////////////////////////////////////////////////////////////
// @param {String[]} strs
// @return {String}

////////////////////////////////////////////////////////////////////
var longestCommonPrefix = function(strs) {
    let prefix = "";

    if(strs === null || strs.length === 0) {
        return prefix;
    }

    for(let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== char) {
                return prefix;
            }
        }

        // build prefix.
        prefix = prefix + char;
    }
    return prefix;
}


