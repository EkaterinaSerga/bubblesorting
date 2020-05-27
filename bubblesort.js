function bubbleSort(arr) {
    let length = arr.length;
    while(length > 0){
        for(let i = 0; i < length-1; i++){
            if(arr[i] > arr[i+1]){
                swap(arr, i);
            }else{
                continue;
            }
        }
        length--;
    }

    return arr;
}

function swap(arr, idx){
   const temp = arr[idx];
   arr[idx] = arr[idx+1];
   arr[idx+1] = temp;
}
