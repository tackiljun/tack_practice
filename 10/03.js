///////////////////////////////////////////////////////////////////////////////////
// Merge Intervals
// 구간 병합하기.
///////////////////////////////////////////////////////////////////////////////////
// Example1.
// input : intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// output : [[1, 6], [8, 10], [15, 18]]
// Explanation : Since intervals [1, 3] and [2, 6] overlap, merge them into [1, 6].
///////////////////////////////////////////////////////////////////////////////////
// Example2.
// input : intervals = [[1, 4], [4, 5]]
// output : [[1, 5]]
// Explanation : Intervals [1, 4] and [4, 5] are considered overlapping.
///////////////////////////////////////////////////////////////////////////////////
// Constraints.
// 1. 1 <= Intervals.length <= 10의4승.
// 2. Intervals[i].length == 2.
// 0 <= start i <= end i <= 10의4승.

///////////////////////////////////////////////////////////////////////////////////
// @param {number[] []} intervals
// @return {number[] []}

///////////////////////////////////////////////////////////////////////////////////
var merge = function(intervals) {

    // intervals -> 구간 시작시간을 기준으로 정렬 sort()
    // 조건문.
    // 1. 이전구간의 끝시간이 >= 다음구간의 시작시간 -> 병합.
    // 2. 아닐 경우 병합 X -> 결과리스트에 추가.
    if(intervals.length === 0) {
        return []
    } else if(intervals.length === 1) {
        return intervals
    }

    // 구간 시작시간 기준으로 정렬.
    intervals.sort((a, b) => a[0] - b[0])

    let result = [intervals[0]]

    for(let interval of intervals) {
        let previous = result[result.length - 1]

        if(previous[1] >= interval[0]) {
            // merge.
            previous[1] = Math.max(previous[1], interval[1])
        } else {
            result.push(interval)
        }
    }
    return result

}