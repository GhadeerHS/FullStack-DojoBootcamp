// 1. Given an array and a value Y, count and print the number of array values greater than Y.

function countGreaterThan(arr, y) {
    var count = 0;
    var i = 0
    while (i < arr.length) {
        if (arr[i] > y)  {
            count += 1;
            console.log(arr[i])
        }
    i++;
    }
    return count;
}
countGreaterThan([1,2,3,4,5,6,7],5);


// 2. Given an array, print the max, min and average values for that array.

function printMaxMinAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } 
        else if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum/arr.length);
}
printMaxMinAvg([1,2,3,4,5,6,7,8]);

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function noNegative(arr) {
    for (var i = 0; i < arr.length; i++ ) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
noNegative([1,4,6,-1,-5,7,-4]);

/// 4. Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, start, end) {
    arr.splice(start, end-1 )
    return arr;
  }
  
  removeVals([20,30,40,50,60,70],2,4);