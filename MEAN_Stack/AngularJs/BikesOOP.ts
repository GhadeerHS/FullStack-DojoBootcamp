class Bike {
    price: number;
    max_speed: number;
    miles: number;
  
    constructor(price: number, max_speed: number) {
      this.price = price;
      this.max_speed = max_speed;
      this.miles = 0;
    }
    displayInfo() {
      return ("The Price: " + this.price + "and the Max speed: " + this.max_speed + "and the Miles: " + this.miles);
    }
    ride() {
      this.miles += 10;
      return this;
    }
    reverse() {
      this.miles -= 5;
      return this;
    }
  }
  
  
  let Bike1 = new Bike(200, 30);
  let Bike2 = new Bike(500, 40);
  let Bike3 = new Bike(180, 22);
  
  console.log(Bike1.ride().ride().ride().reverse().displayInfo());
  console.log(Bike2.ride().ride().reverse().reverse().displayInfo());
  console.log(Bike3.reverse().reverse().reverse().displayInfo());