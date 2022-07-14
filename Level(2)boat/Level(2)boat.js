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
