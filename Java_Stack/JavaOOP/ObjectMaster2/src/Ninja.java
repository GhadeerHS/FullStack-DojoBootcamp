public class Ninja extends Human {
	int stealth = 10;
	
	public void runAway(Human human) {
		human.health -= 10;
		System.out.println("After running away, their health is now " + human.health);
	}
	public void steal (Human human) {
		human.health -= this.stealth;
		this.health += this.stealth;
		System.out.println("health is stolen from another player, their health is now " + human.health);
	}
	

}