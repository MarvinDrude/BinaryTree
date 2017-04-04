function Node(onVisit, value) {

    this.onVisit = onVisit;
    this.value = value;

    this.left = null;
    this.right = null;

}

Node.prototype.search = function(value) {

    if(this.value == value) {

        return this;

    } else if (this.value > value && this.left != null) {

        return this.left.search(value);

    } else if (this.value < value && this.right != null) {

        return this.right.search(value);

    } else {

        return null;

    }

}

Node.prototype.visit = function() {

    if(this.left != null){

        this.left.visit();

    }

    this.onVisit(this.value);
    
    if(this.right != null) {

        this.right.visit();

    }

}

Node.prototype.addNode = function(node) {

    if(node.value >= this.value) {
        
        if(this.right != null) {

            this.right.addNode(node);

        } else {

            this.right = node;

        }

    } else {

        if(this.left != null) {

            this.left.addNode(node);

        } else {

            this.left = node;

        }

    }

}