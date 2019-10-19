function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
// OUTPUT> 2,3,undefined

function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
// OUTPUT> 6,10

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
// OUTPUT> 3,7

var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
OUTPUT> 15,15,10,15

for(var i=0; i<15; i+=2){
    console.log(i);
 }
// OUTPUT> 0,2,4,6,8,10,12,14

for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){     
        console.log(i*j);
    }
 }
// OUTPUT> 0,0,0,1,0,2

function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<x; j++){         
           console.log(i*j);
       } 
    }
 }
 z = looping(3,3);
 console.log(z);
// OUTPUT> 0,0,0,0,1,2,0,2,4

function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<y; j++){         
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);
// OUTPUT> 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

//////////////////////////////////////////////
//////////////Compleate The Code//////////////

/////// 1- Print 1 to x :

function printUpTo(x){
    // your code here
    if (x < 0) {
      return false;
    }
    for (var i = 1; i <= x; i++){
      console.log(i);
    }
  }
  printUpTo(1000); // should print all the integers from 1 to 1000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false

  
  ///////2-PrintSum :

  function printSum(x){
    var sum = 0;
    //your code here
    for (var i = 0; i <= x ; i++) {
        console.log(i);
        sum += i;
        console.log(sum);
    }
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640


  ///////3-PrintSumArray : 

  function printSumArray(x){
    sum = 0;
    for(var i=0; i<x.length; i++) {
      sum +=x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6


// 4-Bonus: LargestElement :

function LargestElement(x){
    var max = x[0];
    for(var i=0; i<x.length; i++) {
      if(x[i]> max){
        max= x[i];
      }
    }
    return max;
  }
  console.log(LargestElement([1,30,5,7]) ); 

