
const merge = (arr, low, mid, high) => {
    let left = low;
    let right = mid + 1;
    const temp = [];
    while(left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left +=1;
        } else {
            temp.push(arr[right]);
            right +=1;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left+=1;
    }
    while(right <= high) {
        temp.push(arr[right]);
        right+=1;
    }

    // Alterntaive for multiple while loops above
    // if (left <= mid) {
    //     temp.push(...arr.slice(left, mid + 1))
    // }
    // if (right <= high) {
    //     temp.push(...arr.slice(right))
    // }
  
    for (let i=low;i<=high; i++) {
        arr[i]= temp[i-low];
    }
    // console.log("temp", temp)
}

const mergeSort = (arr, low, high) => {
   if (low === high) {
         return;
   }
   const mid = Math.floor((low + high) / 2);
   mergeSort(arr, low, mid);
   mergeSort(arr, mid+1, high);
   merge(arr, low, mid, high);
};

const run = () => {
    const arr = [3,2,4,1,3]
    // [3,2,4], [1,3]
    // [0,1,2], [3,4] => index
    mergeSort(arr, 0, arr.length - 1);
    console.log("🚀 ~ run ~ arr:", arr)
}
run();