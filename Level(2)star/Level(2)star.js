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
