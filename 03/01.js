// #1. 추가 문자열 활용.

// input = "abba" for ........
// reversed = ""
// += a
// += ab
// += abb
// += abba

function checkPalindrome(str) {
    let reversed = "";
    // reversed라는 앞인 문자열 만들고.

    for(let i = str.length - 1; i >= 0; i--) {
        // 입력받은 문자열 길이만큼 반복문을 돌려준다.
        // 포인트의 시작은 맨 오른쪽 끝.
        // 오른쪽에서 왼쪽으로 움직이는 반복문을 돌리게 되고 
        reversed += str[i]
        // 빈 문자열의 반복문을 인풋글자를 하나씩 덧붙이기 시작.
    }
    return reversed === str
    // 최종적으로 완성된 reversed라는 문자열과 
    // 입력받은 인풋의 값이 같냐를 비교하는것.
}

console.log(checkPalindrome("abba"))
console.log("=====")
console.log(checkPalindrome("david"))
console.log("=====")
console.log(checkPalindrome("eye"))
