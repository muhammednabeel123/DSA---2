function Partition(arr, lb, ub) {
    let pivot = arr[lb];
    let start = lb;
    let end = ub;
  
    while (start < end) {
      while (arr[start] <= pivot) {
        start++;
      }
      while (arr[end] > pivot) {
        end--;
      }
      if (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
      }
    }
  
    let temp = arr[lb];
    arr[lb] = arr[end];
    arr[end] = temp;
  
    return end;
  }
  
  function quickSort(arr, lb, ub) {
    if (lb < ub) {
      let loc = Partition(arr, lb, ub);
      quickSort(arr, lb, loc - 1);
      quickSort(arr, loc + 1, ub);
    }
  }
  
  let arr = [9, 3, 7, 1, 5];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  

  //simpler method 

  function quickSort2(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
   for(let i =0 ;i<arr.length-1 ;i++){
    if(arr[i] < pivot){
        left.push(arr[i])
    

    }
    else{
        right.push(arr[i])
    }
   }
   return [...quickSort2(left),pivot,...quickSort2(right)  ]



  }

  let arr1 = [9, 3, 7, 1, 5];
  console.log(quickSort2(arr1));