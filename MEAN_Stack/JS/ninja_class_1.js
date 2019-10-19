function Ninja(name){
    this.name = name;
    this.health = 100;
    var self = this;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        return "My name is " + this.name + " nwn";
    }
    this.showStats = function(){
        return ("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Stength: " + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
}

var ninja1 = new Ninja("ninja1");
console.log(ninja1.sayName());
console.log(ninja1.showStats());
ninja1.drinkSake().drinkSake();
console.log(ninja1.showStats());