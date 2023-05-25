for(let i =0 ;i < n-1 ;i++){
    let flag = 0 
    for(let j= 0 ; j < n-1-i ;j++ ){
        if(a[j] > a[j+1]){
            let temp = a[j]
            a[j] = a[j + 1]
            a[j+1] = temp
            flag 
        }
    } 
}

function quick(arr){
    if( arr.length < 2){
        return arr
    }

    let left = []
    let right = []
    let pivot = arr[arr.length-1]

    for(let i = 0 ;i<arr.length-1;i++){
        if(arr[i] < pivot){
            left.push(arr[i])

        }
        else{
            right.push(arr[i])
        }
    }
    return[...quick(left),pivot,...quick(right)]
}

class stack{
    constructor(){
        this.item = []
    }

    push(element){
        this.item.push(element)
    }
    pop(){
        this.item.pop()
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
        this.item.pop()
    }
}

const stack = new stack()
stack1.push(stack.pop())
const stack1 = new stack()