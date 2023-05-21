class stack {
    constructor(){
        this.item = []
    }

    push(element){
        this.item.push(element)
    }

    pop(element){
       return this.item.pop(element)
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

const stacks = new stack()

stacks.push(20)
stacks.push(30)
stacks.push(40)
console.log(stacks.size());
stacks.print()
stacks.pop()
stacks.print()