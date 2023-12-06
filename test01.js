// Array 중복제거.

const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// 1. Set()

// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(2);

// console.log(mySet);

const uniqueNums = [...new Set(nums)];

console.log(uniqueNums);
console.log("===========================");

