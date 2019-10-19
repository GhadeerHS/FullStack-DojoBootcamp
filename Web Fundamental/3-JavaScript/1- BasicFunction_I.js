///////////////////////Basic Function I :) ///////////////////////
function a(){
    return 35;
}
console.log(a())
//OUTPUT> 35

function a(){
    return 4;
}
console.log(a()+a());
//OUTPUT> 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
//OUTPUT> 6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//OUTPUT> 3,9

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
//OUTPUT> 40

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//OUTPUT> 4,15


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//OUTPUT>10 3,30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//OUTPUT> 3,4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//OUTPUT> 2,5,8,11

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//OUTPUT> 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//OUTPUT> undefined : there is no function call

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//OUTPUT>undefined : there is no function call

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//OUTPUT> 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
//OUTPUT> 15,10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//OUTPUT> 15,15

