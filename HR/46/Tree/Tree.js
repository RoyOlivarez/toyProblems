var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (value) {
  const newTree = new Tree(value);
  this.children.push(newTree);
  return newTree;
};
Tree.prototype.map = function (cb) {
  // create a new root node
  const oldTreeValue = this.value; // 1, 2, 4, 5
  var newTree = new Tree(cb(oldTreeValue)); // 2, 4, 8, 10
  // loop through the children of root
  for (const child of this.children) {
    newTree.children.push(child.map(cb));
  }
  return newTree;
};
var root1 = new Tree(1);
var branch2 = root1.addChild(2); // create an addChild method
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var newTree = root1.map(function (value) {
  return value * 2;
});

console.log('Original Root Value: ', root1.value);
console.log('OR Branch1: ', root1.children[0].value);
console.log('OR Branch1: ', root1.children[1].value);
console.log('OR Branch1-Leaf1: ', root1.children[0].children[0].value);
console.log('OR Branch1-Leaf1: ', root1.children[0].children[1].value); //
console.log('OR Branch1-Leaf2: ', root1.children[1].children[0].value);
console.log('OR Branch1-Leaf2: ', root1.children[1].children[1].value);
console.log('--------------------------------------');
console.log('NT Value: ', newTree.value);
console.log('NT Children[0]: ', newTree.children[0].value);
console.log('NT Children[1]: ', newTree.children[1].value);
console.log('NT Children[0].leaf[0]: ', newTree.children[0].children[0].value);
console.log('NT Children[0].leaf[1]: ', newTree.children[0].children[1].value);
console.log('NT Children[1].leaf[0]: ', newTree.children[1].children[0].value);
console.log('NT Children[1].leaf[1]: ', newTree.children[1].children[1].value);
console.log('Original Root Value: ', root1.value);
