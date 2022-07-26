function solution(line) {
  const intersections = new Set();
  for (let i = 0; i < line.length - 1; i++) {
    let [A, B, E] = line[i];
    for (let j = i + 1; j < line.length; j++) {
      let [C, D, F] = line[j];
      const divider = A * D - B * C;

      const x = B * F - E * D;
      const y = E * C - A * F;
      if (divider === 0) {
      } else if (x % divider !== 0 || y % divider !== 0) {
      } else {
        intersections.add([x / divider, y / divider]);
      }
    }
  }
let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;

  intersections.forEach(([x, y]) => {
    minX = x < minX ? x : minX;
    maxX = x > maxX ? x : maxX;
    minY = y < minY ? y : minY;
    maxY = y > maxY ? y : maxY;
  });
  
//   let ans = [];
//   for (let y = minY; y <= maxY; y++) {
//     ans.push(Array(maxX - minX + 1).fill(false));
//   }
// intersections.forEach(([x, y]) => {
//     let X = x - minX;
//     let Y = maxY - y;
//     ans[Y][X] = true;
//   });
  
// }
