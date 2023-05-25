class circularQueue {
    constructor(capacity){

        this.item = new Array(capacity)
        this.capacity = capacity
        this.rear = -1
        this.front = -1
        this.currentLength = 0

    }
    isFull(){
        this.capacity === this.currentLength
    }

    isEmpty(){
        this.currentLength === 0
    }

    enqueue(element){
        
        
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
         
            this.item[this.rear] = element
            this.currentLength += 1 

            if(this.front === -1){
                this.front = this.rear
            }


        }

    }

    dequeue(){
        if(this.isEmpty()){
            return  null
        }
        this.item[this.front] = null

        this.front = (this.front + 1) % this.capacity
      
    if(this.isEmpty()){
        this.front = -1
        this.end = -1
    }

   
    }


    print() {
        let str = '';
        let i = this.front;
        while (i !== this.rear) {
          str += this.item[i] + ' ';
          i = (i + 1) % this.capacity;
        }
      
        if (this.item[i] !== undefined) {
          str += this.item[i];
        }
        console.log(str);
      }
      
   

}


const queue = new circularQueue(5);
  
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.dequeue(50);

// queue.print();


function BubbleSort(arr){

    for(let i = 0 ; i < arr.length-1; i++){
        let flag = 0
        for(let j = 0 ; j < arr.length-1-i ;j++ ){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = 1

            }
        }
        if(flag == 0 ){
            break;
        }
    }

}

// let arr = [100000,32,4454,212,3213,44321]
// BubbleSort(arr)
// console.log(arr);


function insertion(a){
    for(let i = 1; i < a.length ;i++ ){
        temp = a[i]
        let j = i-1

        while(j >= 0 && a[j] > temp ){
            a[j + 1] = a[ j ]
            j--
        }

        a[j + 1] = temp
    }
}




function selection(a){
    for(let i = 0 ; i < a.length -1 ;i++){
       let min = i

        for(let j = i+1; j < a.length; j++ ){
            if(a[j] < a[min] ){
                min = j
            }
            if(min != i ){
                temp = a[min]
                a[min] = a[i]
                a[i] = temp
            }


        } 
    }
}

let arr = [100000,32,4454,212,3213,44321]
selection(arr)
console.log(arr);

function quick(arr){

    if( arr.length < 2 ){
        return arr
    }

    let pivot = arr[arr.length -1]
    let left = []
    let right = []

    for(let i = 0; i<arr.length -1 ;i++){
        if(arr[i] <= pivot ){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return[...quick(left),pivot,...quick(right) ]


}

const arr1 = [20,10,60,30,70] 
console.log(quick(arr1));

class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }


    hash(key){
        let total = 0
        for(let i = 0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
    }

    set(key,value){
        index = this.hash(key)
        this.table[index] = value
    }
}

class queues {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.item[this.rear] = element
        this.rear ++ 

    }

}