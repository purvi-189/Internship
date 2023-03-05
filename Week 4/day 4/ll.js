function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){
      this.element = element; 
      this.next = null; 
    }; 
  
    this.size = function(){
      return length;
    };
    this.head = function(){
        return head;
      };
  
//   ------------ add
      this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        } else {
            var currentNode = head;
    
            while(currentNode.next){
                currentNode  = currentNode.next;
            }
    
            currentNode.next = node;
        }
    
        length++;
      }; 

    //   remove

      this.remove = function(element){
        var currentNode = head;
       
        
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
    
            previousNode.next = currentNode.next;
            //directly skips one element
        }
    
        length --;
      };
      
      this.isEmpty = function() {
        return length === 0;
      };

      ///adding at particular location
      
  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }
    if(index === 0){
        node.next = currentNode;
        head = node;
    } 
    else {

        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }
}


var ll = new LinkedList();

ll.add('aaa');
ll.add('bbb');
ll.add('cc');

console.log(ll.size());

ll.addAt(2, "zz");
console.log(ll.size());

