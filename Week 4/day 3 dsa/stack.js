//create stack

var Stack = function(){
    this.count = 0;
    this.storage = {};

    //push
    this.push = function(value){
        this.storage[this.count] =value;
        this.count++;
    }

    //pop
    this.pop = function(){
        if(this.count ==0)
            return undefined;
        

        this.count--;
        var ans = this.storage[this.count];
        // console.log(" ans" ,ans);  4
        delete this.storage[this.count];
        return ans;
    }

    //peek

    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log(myStack.pop());
