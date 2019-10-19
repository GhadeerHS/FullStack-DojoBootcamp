///////////////////////Basic Foundation II :)///////////////////////

// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function BiggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }

    return arr;
}
BiggieSize([-1,3,5,-5]);


// 2. Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr) {
    var high = arr[0];
    var low = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
        if (arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low)
    return high;
}
printLowReturnHigh([2,6,4,8]);


// 3. Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
function printOneReturnAnother(arr) {
    var secondToLast = arr[arr.length - 2];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            firstOdd = arr[i];
            break;
        }
    }
    console.log(secondToLast);
    return firstOdd;
}


// 4. Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubleVision(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
doubleVision([1,2,3]);


// 5. Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter += 1;
        } 
    }
    arr[arr.length - 1] = counter;
    return arr;
}
countPositives([-1,1,1,1]);

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function evensAndOdds(arr) {
    var oCounter = 0;
    var eCounter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) { 
            eCounter += 1;
            if (eCounter === 3) {
                console.log("Even more so!");
                eCounter = 0;
            }
        } else { 
            oCounter += 1;
            if (oCounter === 3) {
                console.log("That's odd!");
                oCounter = 0;
            }
        }
    }
}
evensAndOdds([-1,-2,4,5,6,7,-8,4,]);


// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}incrementTheSeconds([1,2,4,5,6,7,8,4,]);

// 8. Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.
function previousLengths(arr) {
    var arrNew = [];
    for (var i = 0; i < arr.length; i++) {
        arrNew[i] = arr[i].length;
    }
    return arrNew;
}
previousLengths(['one','two','three']);


// 9. Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSevenToMost(arr) {
    var arrNew= [];
    arrNew[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arrNew[i] = arr[i] + 7;
    }
    return arrNew;
}
addSevenToMost([1,2,3,4,5,6,7]);


// 10. Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(arr) {
    var temp = arr[0];
    for (var i = 0, x = (arr.length - 1); i < arr.length; i++, x--) {
        temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
    }
    return arr;
}
reverseArr([3,5,6,7]);

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(arr) {
    var arrNew = [];
    for (var i = 0; i < arr.length; i++) {
        arrNew[i] = -Math.abs(arr[i]);
    }
    return arrNew;
}

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
            counter += 1;
        }
    }
    if (counter === 0) {
        console.log("I'm hungry");
    }
    return;
}

// 13. Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapTowardsTheCenter(arr) {
    var temp = arr[0];
    for (var i = 0, x = (arr.length - 1); i < x; i++, x--) {
        if (i === 0 || i % 2 === 0) {
            temp = arr[i];
            console.log(temp);
            arr[i] = arr[x];
            arr[x] = temp;
        } 
    }
    return arr;
}
swapTowardsTheCenter([true,42,"Ada",2,"pizza"]);

// 14. Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
scaleTheArray(scaleArray([1,2,3],3)