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
insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            function traverse(node) {
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                if(node.left === null) {
                    let leftNode = new Node(-value);
                    let rightNode = new Node(value);
                    node.left = leftNode;
                    node.right = rightNode;
                }
            }
            traverse(current);
            return this;
        }
    }
