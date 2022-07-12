const solution = (number, k) => {
    const stack = [];
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        const item = number[i]
        // stack이 초기에 비어있으면 push 한다.
        if (stack.length === 0) {
            stack.push(item)
            continue;
        }
