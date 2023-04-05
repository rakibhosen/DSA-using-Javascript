class Stack{
    constructor(){
        this.items=[]
    }

    //Add a new element 
    push(element){
     return  this.items.push(element)
    }

    //Remove a new element
    pop(element){
        if(this.items.length>0){
            return this.items.pop(element)
        }
    }

    //Top element
    peekElement(){
      return this.items[this.items.length-1]
    }

    //Check stack empty or not
    isEmpty(){
        return this.items.length==0
    }

    //clear
    clear(){
        return this.items=[]
    }
   //Stack size
    size(){
        return this.items.length
    }

}

let stk =new Stack();
 stk.push(1)
stk.push(2)
stk.push(3)

stk.push(4)
stk.push(4)
console.log(stk.items)
stk.pop(4)
console.log(stk.items)
stk.push(8)
console.log(stk.peekElement())

