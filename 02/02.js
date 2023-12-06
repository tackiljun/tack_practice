const stringA = "listen";
const stringB = "silent";

// #2. map = {}

function isAnagram(strA, strB) {
    if(strA.length !== strB.length) {
        return false;
    }

    const hashmap = {}
    
    for(const char of strA) {
        // {l:1, i:1, s:1}
        hashmap[char] = hashmap[char] ? hashmap[char] + 1 : 1;
    }

    for(const char of strB) {
        if(!hashmap[char]) {
            return false;
        }
        hashmap[char]--;
    }
    return true;
}

console.log(isAnagram(stringA, stringB));