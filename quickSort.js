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
  