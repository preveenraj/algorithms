const swap = (a,b) => {
    const temp = a;
    a = b;
    b = temp;
}


const fun = (arr, low, high) => {
    const pivot = arr[low];
    let i=low;
    let j=high;

    while (i<j) {
        while (arr[i] >= pivot && i<=high - 1) {
            i += 1;
        }
        while (arr[j] < pivot && j>=low + 1) {
            console.log("here2")
            j -= 1;
        }
        if (i<j) {
            const temp = arr[i];
            arr[i]=arr[j];
            arr[j]=temp;

            console.log(arr);
        }
    }
    const temp = arr[low];
    arr[low]=arr[j];
    arr[j]=temp;
    return j;
}
// const arr = [4,5,2,5,7,9,1,3];

const quickSort = (arr, low, high) => {
    if (low < high) {
        const pIndex = fun(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}

const run = () => {
    const arr = [4,5,2,5,7,9,1,3];
    const low = 0;
    const high = arr.length - 1;
    quickSort(arr, low, high)
    console.log("Arr", arr)
}

run();