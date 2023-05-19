function BubbleSort(arr){
    let swapped
   do {
    swapped = false
    for(let i=0;i<arr.length - 1 ;i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            swapped =  true
        }
    }
   }while(swapped)
}


// optmized code


function BubbleSort2(arr){
    for(let i=0 ; i<arr.length-1 ; i++){
       let flag = 0
       for(let j=0;j<arr.length-1-i;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] =temp
            flag = 1
        }
       } 
      
       if(flag == 0){
        break;
       }
    }
 
}

const arr = [8,20,2,4,6]
BubbleSort2(arr)
console.log(arr)
