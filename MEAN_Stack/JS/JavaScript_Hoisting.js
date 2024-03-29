// 1 //
console.log(hello);                                   
var hello = 'world';                                 

// OUTPUT:  undefined

// 2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// OUTPUT: undefined, magnet

// 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// OUTPUT: undefined, super cool

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// OUTPUT: chicken, half-chicken, undefined

// 5 
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// OUTPUT: TypeError becuse mean is a var not a function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// OUTPUT: undefined, rock, r&b, disco"

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// OUTPUT: san jose", seattle, burbank ,san jose"

// 8 - Bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
// OUTPUT: {name: Chicago, students: 65, hiring: true}
//  TypeError - because of  constant variable 