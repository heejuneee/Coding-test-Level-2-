function countingSort(arr, min, max) {
  const countHash = arr
    .reduce((acc, num) => {
      acc[num] += 1;
      return acc;
    }, new Array(max + 1).fill(0))
    .reduce((acc, num, idx) => {
      if (idx === 0) return [0];
      acc.push(num + acc[idx - 1]);
      return acc;
    }, []);
const result = arr.reduce((acc, num) => {
    const targetIdx = countHash[num];
    countHash[num] -= 1;
    acc[targetIdx] = num;
    return acc;
  }, []);

  return result.slice(1).reverse();
}

const solution = (pplArr, limit) => {
  const sortedArr = countingSort(pplArr, 40, 240);

  if (sortedArr[sortedArr.length - 1] > 50) return sortedArr.length;

  return sortedArr.reduce((acc, person) => {
    // 몸무게 절반 이상이면 볼 것도 없이 바로 새 배 탑승
    if (person > limit / 2) {
      acc.push([person]);
      return acc;
    }
 const len = acc.length;
    // 자기 바로 앞의 무거운 사람과 한 배 탈 수 있으면 둘이 합승시키고 출발~
    if (acc[len - 1] && acc[len - 1][0] + person <= limit) {
      acc.pop();
      acc.unshift([limit, limit]);
      return acc;
    }
