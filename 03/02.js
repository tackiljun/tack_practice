// #2. Two Pointer 투포인터 활용.

function checkPalindrome(str) {
    const len = str.length
    const middle = Math.floor(len/2)

    for(let i = 0; i < middle; i++) {
        if(str.charAt(i) !== str.charAt(len -1 -i)) {
            // 시작포인터, 끝포인터 비교를 하고 
            // 일치하지 않으면 리턴을.
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("abba"))
console.log("=====")
console.log(checkPalindrome("david"))
console.log("=====")
console.log(checkPalindrome("eye"))