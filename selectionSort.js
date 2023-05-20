function selectionSort(a){

    for(let i = 0 ;i<a.length-1 ;i++){
     
        let min = i
        for(let j =i+1 ;j<a.length ; j++){
            if(a[j] < a[min]){
                min = j
            }

        }
        if( i != min){
           
            let temp = a[min] 
            a[min] = a[i]
            a[i] = temp
        }
    }return a
}

console.log(selectionSort([4,2,3,51,2,4,]));