////1. Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function noNegatives(arr) {
    for (var i = 0; i < arr.length; i++ ) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
noNegatives([1,2,-1,-3]);


// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

function moveForward(arr) {
    var arrNew = [];
    for (var i = 0; i < arr.length - 1; i++) {
        arrNew[i] = arr[i + 1];
    }
    arrNew.push(0);

    return arrNew;
}
moveForward([1,2,3]);

// 3. Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

function reversedArr(arr) {
    var arrNew= [];
    for (var i =arr.length-1 ;i >=0 ; i--) {
        arrNew[arr.length-i] = arr[i]; 
    }
    return arrNew;
}
reversedArr([1,2,3]);

// 4. Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repeatTwice(arr) {
    var arrNew= [];
    var x = 0;
    for (var i = 0; i < arr.length; i++) {
        while (x < 2) {
            arrNew.push(arr[i]);
            x++;
        }
        x = 0;
    }
    return arrNew;
}
repeatTwice( [4,"Ulysses", 42, false] );