/////////////////////////////////////////////
// LOW             MID            HIGH 
//  0   1   2   3   4   5   6   7   8
// [1, 10, 20, 47, 59, 63, 75, 88, 99]
// target : 20

/////////////////////////////////////////////
// Pseudo Code.

// fn binarySearch(A, T) is
//     Low := 0
//     High := n-1
//     while Low <= High do
//         middle := floor((Low + High) / 2)
//         if T < A[middle] then
//             High := middle -1
//         else if T > A[middle] then
//             Low := middle +1
//         else :
//             return middle
//         return -1