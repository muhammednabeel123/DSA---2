class Queue {
    constructor(){
        this.items = []
    }
    enqueue(element){
        return this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }

        return null
    }
    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }
}

const queue  = new Queue
console.log(queue.isEmpty());

queue.enqueue(202)
queue.enqueue(201)
queue.enqueue(301)
queue.enqueue(202)
console.log(queue.dequeue());
console.log(queue.peek());
queue.print()
