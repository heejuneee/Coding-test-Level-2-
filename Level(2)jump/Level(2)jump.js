let memo =  []
function init(){
  let s1 = 0
  let s2 = 1
  for(let i = 1; i < 1500; i++){
    s1 = s1 + s2
    s2 = s1 + s2
    memo.push(s1)
    memo.push(s2)
  }
}
init()
function jumpCase(num) {
    return memo[num - 1];
}
