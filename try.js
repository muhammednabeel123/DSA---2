// class stack {
//     constructor(){
//         this.item = []
//     }

//     push(element){
//         this.item.push(element) 
//     }

//     pop(){
//        return this.item.pop()
//     }

//     peek(){
//         return this.item[this.item.length-1]
//     }

//     print(){
//         console.log(this.item.toString());
//     }
    
// }



// const item =  new stack()

// item.push(20)
// item.push(30)
// console.log(item.peek());

// item.print()

// class queue {
//     constructor(){
//         this.item = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element){
//         this.item[this.rear] = element
//         this.rear ++

//     }

//     dequeue(){
//         const item = this.item[this.front]
//         delete this.item[this.front]
//         this.front ++
//         return item
//     }

//     isEmpty(){
//        return this.rear - this.front === 0
//     }

//     peak(){
//         return this.item[this.front]
//     }

//     print(){
//         console.log(this.item);
//     }




// }

// const list = new queue()

// list.enqueue(20)
// list.enqueue(50)
// list.enqueue(40)
// list.dequeue()
// console.log(list.peak());
// list.print()




class circularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.capacity = capacity;
      this.currentLength = 0;
      this.rear = -1;
      this.front = -1;
    }
  
    isFull() {
      return this.currentLength === this.capacity;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    enqueue(element) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.currentLength += 1;
        if (this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
  
      return item;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.front];
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log('Queue is empty');
      } else {
        let i = this.front;
        let str = '';
        while (i !== this.rear) {
          str += this.items[i] + ' ';
          i = (i + 1) % this.capacity;
        }
        str += this.items[i];
        console.log(str);
      }
    }
  }
  
  const queue = new circularQueue(5);
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  
  queue.print();
  