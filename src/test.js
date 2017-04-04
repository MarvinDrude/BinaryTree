var tree = new BinaryTree();
var testAmount = 90;

for(var i = 0; i < testAmount; i++) {

    tree.addValue(randomInt(1, 60));

}

tree.traverse();

var searched = tree.search(55);

if(searched == null) {
    
    console.log("Value not found.");

} else {

    console.log("Value found: ");
    console.log(searched);

}

function randomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}