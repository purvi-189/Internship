// no duplicate items , not particular order
// use: to check presence of item
//FIFO

function Queue(){
    array =[];
    this.print = function(){
        console.log(array);
    };

    this.enqueue = function(elem){
        array.push(elem);
    };

    this.dequeue = function(){
        return array.shift();
    };

    //first element
    this.front = function(){
        return array[0];
    };
    this.size = function(){
        return array.length;
    };
    this.isEmpty = function(){
        return (array.length == 0);
    };
}

var q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');

q.print();
q.dequeue();
q.print();

console.log(q.size() );
console.log(q.isEmpty() );