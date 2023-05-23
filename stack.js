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
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.size === 0
    }
    size(){
        return this.item.length
    }
    print() {
        console.log(this.item.toString());
    }
}
class stack1 {
    constructor(){
        this.item = []
    }

    push(element){
        this.item.push(element)
    }

    pop(){
       return this.item.pop()
    }

    print(){
        console.log(this.item.toString());
    }

}
const stacks = new stack()

stacks.push(20)
stacks.push(30)
stacks.push(40)
stacks.push(50)
stacks.push(70)
console.log(stacks.size());
stacks.print()




const stackes = new stack1()


let length = stacks.size()
console.log(length);


for(i = 1; i <= (length)/2 ; i++){
    stackes.push(stacks.pop())
    
}
    stacks.pop()

    stackes.print()

    for(i = 1; i <= length ; i++){
        stacks.push(stackes.pop())
        
    }



stacks.print()