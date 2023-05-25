class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.first = null
        this.last = null
    }
push(element){
    const newNode = new Node(element)
    if(!this.first){
        this.first = newNode
        this.last= newNode
    }else{
       let temp =  this.first
        this.first = newNode
        this.first.next = temp
    }

}

pop(){
    if(!this.first){
        return null
    }

    if(this.first === this.last){
        this.first = null
    }
    else{
        this.first = this.first.next
    }
}

}

const stacks =  new stack()
stacks.push(10)
stacks.push(20)
stacks.push(30)
stacks.push(40)

console.log(stacks);

function mergeSort(arr){
    if(n < 2){
        return arr
    }

    let mid = math.floor(arr.length)/2
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr) )
}

function merge(leftArr)