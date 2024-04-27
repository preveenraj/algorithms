// Get only one subsequence with sum equal to a given sum
function findSubsequences(index, ds, arr, n, s, sum) {
    if ( s > sum) {
        return false;
    }
    if (index === n) {
        if (s === sum) {
            console.log(ds);
            return true;
        }
        return false;
    }
    // take or pick the particular index into subsequence
    ds.push(arr[index]); 
    s += arr[index];
    if (findSubsequences(index + 1, ds, arr, n, s, sum)) {
        return true;
    }
    ds.pop();
    s -= arr[index];

    // do not take or pick the particular index into subsequence
    if (findSubsequences(index + 1, ds, arr, n, s, sum)) {
        return true;
    }

    return false;
}


function run() {
    const arr = [3,1,2]
    const n = arr.length;
    const ds = [];
    let s = 0;
    const sum = 4;

    // subsequences:
    // [3]
    // [1,2]
    findSubsequences(0, ds, arr, n, s, sum);
}

// Call the run function to execute the code
run();