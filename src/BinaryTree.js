function BinaryTree() {

    this.root = null;

}

BinaryTree.prototype.search = function(value) {

     return this.root.search(value);

}

BinaryTree.prototype.addValue = function(value) {

    var node = new Node(this.onVisit, value);

    if(this.root == null) {

        this.root = node;

    } else {

        this.root.addNode(node);

    }

}

BinaryTree.prototype.onVisit = function(value) {

    console.log(value);

}

BinaryTree.prototype.traverse = function() {

    this.root.visit();

}