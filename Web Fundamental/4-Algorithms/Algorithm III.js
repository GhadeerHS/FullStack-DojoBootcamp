/////////////Part 1 ////////////

function a(x,y){
    return 5;
  }
  console.log(a(5,5))

  //OUTPUT> 5

  function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
  }
  b = a(2,2)
  console.log(b);
  console.log(a(6,8));
  
  // OUTPUT> [2, 2, 5] , [6, 8, 5], [2, 2, 5] , [6, 8, 5]

  function a(x){
    z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
  }
  y = a(2);
  y.push(5);
  console.log(y);
  
  //OUTPUT> [2, 2, 5]
  function a(x){
    if(x[0] < x[1]) {
       return true;
    }
    else {
       return false;
    }
  }
  b = a([2,3,4,5])
  console.log(b);
  
  //OUTPUT> true

  function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
        x[i] = "Coding";
      }
      }
      return x;
  }
  console.log(a([1,2,3,4]))
  
  //OUTPUT> ["Coding", "Coding", "Coding", "Coding"]

  function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
      }
      return x;
  }
  console.log(a([5,7,-1,4]))
  
  //OUTPUT> [5, "Coding", "Dojo", 4]

  function a(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
  }
  b = a([5,10])
  console.log(b);

  //OUTPUT> 10

function sum(x){
    sum = 0;
    for(var i=0; i<x.length; i++){
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}

//OUTPUT> undefined


/////////////Part 2////////////
// 1) Analyze an array’s values and return the average of its values.

function printAverage(x){
    sum = 0;
    // your code here
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum/x.length;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8]);
 console.log(y); // should log 5




 //2) Create an array with all the odd integers between 1 and 255 (inclusive)
 function returnOddArray(){
    // your code here
    var arr = [];
    for (var i = 1; i <=255; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]




 //3) Square each value in a given array, returning that same array with changed values.
 function squareValue(x){
    // your code here
    for (var i = 0; i < x.length; i++) {
        x[i] = (x[i] * x[i]);
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
