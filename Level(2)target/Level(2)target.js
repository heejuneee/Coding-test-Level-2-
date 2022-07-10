function solution(numbers, target) {
    var answer = 0;
    var answer = 0;

    let root = new BinarySearchTree();
    root.insert(0);
    numbers.forEach(function(val) {
       root.insert(val); 
    });

    answer = root.DFSPreOrder(target);
    return answer;
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }   
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
