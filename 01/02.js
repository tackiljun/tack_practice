const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// 2. indexOf().

// console.log(nums.indexOf(6));

const uniqueNums = nums.filter((item, position) => {
    return nums.indexOf(item) === position;
});

console.log(uniqueNums);

// 현재 position과 indexOf의 리턴값이 같냐.
// 같은 경우메나 result(결과값)이 ...
// 1 의 position 0, indexOf 0 -> result 1.
// 2 의 position 1, indexOf 1 -> result 2.
// 3 의 position 2, indexOf 2 -> result 3
// ........