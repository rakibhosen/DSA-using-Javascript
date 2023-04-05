class Queue{
    constructor(){
        this.items={}
        this.head=0
        this.tail=0
    }

    //Add a new element
    enqueue(element){
        this.items[this.tail]=element
        this.tail++
    }

    //remove of a element 
    dequeue(){
       let removeElement= this.items[this.head];
       delete this.items[this.head];
       this.head++;
       return removeElement;
    }
    //Pick head element
    peek(){
        return this.items[this.head]
    }
    //Element size
    sizeOfelement(){
        let elementSize=this.tail-this.head;
        return elementSize;
    }
    //Check queue empty or not
    isEmpty(){
        if(this.sizeOfelement()==0){
            return true
        }else{
            return false
        }
    }

    //Clear
    clear(){
        this.items={}
        this.head=0
        this.tail=0;
    }
}
let queue = new Queue();

// add items to queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("Queue after adding items: ");
console.log(queue.items);
// remove the first item
queue.dequeue();

console.log("Queue after deleting the first item:");
console.log(queue.items);
console.log(queue.sizeOfelement())