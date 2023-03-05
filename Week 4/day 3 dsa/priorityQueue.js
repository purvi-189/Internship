function priorityQueue(){
    var array = [];

    this.printArr = function(){
        console.log(array);
    };

    this.enqueue = function(elem){

        if(this.isEmpty()){
            array.push(elem);
        }
        else{
            var test =false;
            for(var i=0; i<array.length; i++){
                if(elem[1] < array[i][1])
                {
                    array.splice(i,0,elem);
                    test =false;
                    break;
                }
            }

            if(!test)
                array.push(elem);
        }

    }
    this.dequeue = function(){
        var val = array.shift();
        return val[0];
    }
    // this.front = function(){
    //     return array[0];
    // };
    // this.size = function(){
        return array.length;
    };
    this.isEmpty = function(){
        return (array.length == 0);
    };
};



var pq = new priorityQueue();

pq.enqueue(['purvi',2]);
pq.enqueue( ['aabc', 3]);
pq.enqueue(['xyz',1]);

pq.printArr();



