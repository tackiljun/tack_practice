const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// 3. caching / frequency Map.
// 추가적인 자료구조를 확인하는 방법.
// Loop를 통해 미리 지정된 caching object에 존재 여부 확인.

function uniqueNums(arr) {
    const uniqueElements = {}
    const result = []

    for(let element of arr) {
        if(!uniqueElements[element]) {
            result.push(element);
        }
        uniqueElements[element] = element;
    }
    return result;
}

console.log(uniqueNums(nums));