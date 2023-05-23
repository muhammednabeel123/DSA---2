class stack {
    constructor(){
        this.item = []
    }

    push(element){
        this.item.push(element) 
    }

    pop(){
       return this.item.pop()
    }

    peek(){
        return this.item[this.item.length-1]
    }

    print(){
        console.log(this.item.toString());
    }
    
}



const item =  new stack()

item.push(20)
item.push(30)
console.log(item.peek());

item.print()