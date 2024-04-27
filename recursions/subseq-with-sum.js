// Get subsequences with sum equal to a given sum
function findSubsequences(index, ds, arr, n, s, sum) {
    if ( s > sum) {
        return;
    }
    if (index === n) {
        if (s === sum) {
            console.log(ds);
        }
        return;
    }
    // take or pick the particular index into subsequence
    ds.push(arr[index]); 
    s += arr[index];
    findSubsequences(index + 1, ds, arr, n, s, sum); 
    ds.pop();
    s -= arr[index];

    // do not take or pick the particular index into subsequence
    findSubsequences(index + 1, ds, arr, n, s, sum);
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
    findSubsequences(0, ds, arr, n, s, sum);
}

// Call the run function to execute the code
run();