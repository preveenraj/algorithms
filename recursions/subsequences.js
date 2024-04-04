function findSubsequences(index, ds, arr, n) {
    if (index === n) {
        console.log(ds);
        return;
    }
    // take or pick the particular index into subsequence
    ds.push(arr[index]);
    findSubsequences(index + 1, ds, arr, n);
    ds.pop();

    // do not take or pick the particular index into subsequence
    findSubsequences(index + 1, ds, arr, n);
}

function run() {
    const arr = [3,1,2]
    const n = arr.length;
    const ds = [];
    // subsequences:
    // [3]
    // [1]
    // [2]
    // [3,1]
    // [1,2]
    // [3,2]
    // [3,1,2]
    // [] (empty subsequence)
    // total: 2^3 = 8 (2^n where n is the length of the input array)

    // Call the findSubsequences method
    findSubsequences(0, ds, arr, n);
}

// Call the run function to execute the code
run();