public class Wizard extends Human {
	int health = 50;
	int intelligence = 8;
	
	public void heal(Human human) {
		human.health += this.intelligence;
		System.out.println("After healing, their health now is " + human.health);
	}
	public void fireball(Human human) {
		human.health -= this.intelligence * 3;
		System.out.println("After fireballed another player, their health now is " + human.health);
	}
}