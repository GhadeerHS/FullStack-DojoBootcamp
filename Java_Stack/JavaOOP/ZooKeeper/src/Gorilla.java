public class Gorilla extends Mammal {
	
	public Gorilla() {
		
	}
	
	public int eatBanana() {
		this.energyLevel+= 10;
		System.out.println("Gorilla satisfied!");
		return this.displayEnergy();
	}
	
	public int climb() {
		this.energyLevel-= 10;
		System.out.println("Gorilla has climbed a tree!");
		return this.displayEnergy();
	}
	
	public int throwSomething(){
		this.energyLevel -= 5;
		System.out.println("Gorilla has thrown Somthing!");
		return this.energyLevel;
	}
}