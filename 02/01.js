const stringA = "listen";
const stringB = "silent";

// #1. split(), sort(), and join()
// "listen" -> split() -> sort() -> join()

function isAnagram(strA, strB) {
    if(strA.length !== strB.length) {
        return false;
    }
    return strA.split("").sort().join() === strB.split("").sort().join();
}

console.log(isAnagram(stringA, stringB));
