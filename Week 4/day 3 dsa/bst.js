class Node{
    constructor(data, left=null, rig=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

class BST{
    constructor(){
        this.root =null;
    }
    add(data){
        const node = this.root;

        if(node == null){
            this.root= new Node(data);
            return;
        }
        else{
            const searchTree = function(node){

                if(data < node.data){
                    if(node.left ==null){
                        node.left = new Node(data);
                        return;
                    }
                else if(node.left!= null){
                    return searchTree(node.left);
                    }
                }
            
                else if(data > node.data){
                        if(node.right ==null){
                            node.right = new Node(data);
                            return;
                        }
                        else if(node.right!=null){
                            return searchTree(node.right);
                        }
                }

                else{
                    return null;
                }
            };
            return searchTree(node);
    }
}
}

const bst = new BST();

bst.add(8);
bst.add(4);
bst.add(18);
bst.add(2);
bst.add(6);
bst.add(3);
bst.add(5);
bst.add(16);
bst.add(32);

isBalanced(){
    return (this.minHeight() >= this.maxHeight() -1 );
}
isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }