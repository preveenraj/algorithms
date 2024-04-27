// Get only one subsequence with sum equal to a given sum
function findSubsequences(index, ds, arr, n, s, sum) {
    if ( s > sum) {
        return 0;
    }
    if (index === n) {
        if (s === sum) {
            console.log(ds);
            return 1;
        }
        return 0;
    }
    // take or pick the particular index into subsequence
    ds.push(arr[index]); 
    s += arr[index];
    const l = findSubsequences(index + 1, ds, arr, n, s, sum);
    ds.pop();
    s -= arr[index];

    // do not take or pick the particular index into subsequence
    const r = findSubsequences(index + 1, ds, arr, n, s, sum);

    return l + r;
}


function run() {
    const arr = [3,1,2]
    const n = arr.length;
    const ds = [];
    let s = 0;
    const sum = 3;

    // subsequences:
    // [3]
    // [1,2]
    const count = findSubsequences(0, ds, arr, n, s, sum);
    console.log("count: ", count);
}

// Call the run function to execute the code
run();